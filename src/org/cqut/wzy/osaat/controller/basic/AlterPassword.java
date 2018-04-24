package org.cqut.wzy.osaat.controller.basic;

import javax.servlet.http.HttpSession;

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
public class AlterPassword {

	@Autowired
	private BasicService basicService;

	@RequestMapping("AlterPassword")
	private String AlterUserPassword(@RequestParam("oldpassword") String oldpassword,
			@RequestParam("newpassword") String newpassword, @RequestParam("confirmpassword") String confirmpassword,
			Model model, HttpSession session) throws Exception {

		String AESOldpw = AESCoder.encrypt(oldpassword, (String) session.getAttribute("passwordkey"));
		String MD5Oldpw = MD5Coder.encodeMD5Hex(AESOldpw);
		if (!MD5Oldpw.equals((String) session.getAttribute("password"))) {
			model.addAttribute("result", "对不起，您的原密码输入错误，不能修改您的密码！");
			return "OSAAT/basic/alterpassword";
		} else if (newpassword.equals("") || "".equals(newpassword)) {
			model.addAttribute("result", "请您输入您的新密码！");
			return "OSAAT/basic/alterpassword";
		} else if (newpassword.length() < 3) {
			model.addAttribute("result", "输入的新密码的长度必须在3到20之间！");
			return "OSAAT/basic/alterpassword";
		} else if (confirmpassword.equals("") || "".equals(confirmpassword)) {
			model.addAttribute("result", "请您重复输入您的新密码！");
			return "OSAAT/basic/alterpassword";
		} else if (!newpassword.equals(confirmpassword)) {
			model.addAttribute("result", "输入的两次新密码不一样！");
			return "OSAAT/basic/alterpassword";
		} else {
			User user = new User();
			user.setId((Long) session.getAttribute("id"));
			AESOldpw = AESCoder.encrypt(newpassword, (String) session.getAttribute("passwordkey"));
			MD5Oldpw = MD5Coder.encodeMD5Hex(AESOldpw);
			user.setPassword(MD5Oldpw);
			basicService.UpdateUserInfo(user);
			session.setAttribute("password", MD5Oldpw);
			model.addAttribute("result", "修改密码成功！");
			return "OSAAT/basic/alterpassword";
		}

	}

}
