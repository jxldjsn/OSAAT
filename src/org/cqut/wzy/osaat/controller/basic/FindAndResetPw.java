package org.cqut.wzy.osaat.controller.basic;

import java.util.Date;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.BasicService;
import org.cqut.wzy.osaat.util.AESCoder;
import org.cqut.wzy.osaat.util.MD5Coder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/basic/")
public class FindAndResetPw {
	
	@Autowired
	private BasicService basicService;
	
	@RequestMapping("FindAndResetPw")
	private String FindAndResetPw(@RequestParam("parameters") String parameters, Model model) throws Exception {
		
		String passwordkey = parameters.split("-")[0];
		String username = parameters.substring(passwordkey.length() + 1);
		
		username = AESCoder.decrypt(username, passwordkey);
		
		model.addAttribute("username", username);
		return "OSAAT/basic/findAndResetPw";
		
	}
	
	@RequestMapping("FindResetPw")
	private String FindResetPw(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("repassword") String repassword, Model model) throws Exception {
		
		User user = basicService.SearchByUsernameReturnUser(username);
		
//		System.out.println("_____________________________________" + user.getFindAlready());
		if ((null == user.getFindAlready()) || (user.getFindAlready() != null && user.getFindAlready().equals(0))) {

			if (password.length() < 3) {
				model.addAttribute("findAndResetPwError", "输入的新密码的长度必须在3到20之间！");
				model.addAttribute("username", username);
				return "OSAAT/basic/findAndResetPw";
			} else if (!(password.equals(repassword))) {
				model.addAttribute("findAndResetPwError", "您输入的两次密码不一样,请重新输入!");
				model.addAttribute("username", username);
				return "OSAAT/basic/findAndResetPw";
			} else {
				Date nowdate = new Date();
				
				if (nowdate.getTime() > user.getFindPwOutdate().getTime()) {
					model.addAttribute("findAndResetPwError", "对不起，您重置密码的链接已经过期，请您重新获取！");
					model.addAttribute("username", username);
					return "OSAAT/basic/findAndResetPw";
				} else {
					user.setPassword(MD5Coder.encodeMD5Hex(AESCoder.encrypt(password, user.getPasswordkey())));
					
					user.setFindAlready(1);
					
					basicService.UpdateUserInfo(user);
					
					model.addAttribute("findAndResetPwError", "密码已经成功修改，请您返回登陆页面进行登陆！");
					model.addAttribute("username", username);
					return "OSAAT/basic/findAndResetPw";
				}
				
			}
			
		} else {
			model.addAttribute("findAndResetPwError", "对不起，您重置密码的链接已经失效，请您重新找回！");
			model.addAttribute("username", username);
			return "OSAAT/basic/findAndResetPw";
		}
	}
	
	
	

}
