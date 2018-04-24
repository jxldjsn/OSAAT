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
public class ActiveActionController {

	@Autowired
	private BasicService basicService;

	@RequestMapping("ActiveAction")
	private String ActiveUser(@RequestParam("username") String username, @RequestParam("password") String password,
			@RequestParam("activecode") String activecode, Model model, HttpSession session) throws Exception {
//		System.out.println("$$$$$$$$$$$$$$$$$$对吗？" + activecode + "   " + username + "    " + password);
		if (username.equals("") || "".equals(username)) {
			model.addAttribute("error", "请您输入您的用户名。");
			return "OSAAT/basic/active";
		} else if (password.equals("") || "".equals(password)) {
			model.addAttribute("error", "请您输入您的密码。");
			return "OSAAT/basic/active";
		} else if (activecode.equals("") || "".equals(activecode)) {
			model.addAttribute("error", "请您输入您的激活码。");
			return "OSAAT/basic/active";
		} else {
			User user = new User();
			user = basicService.SearchByUsernameReturnUser(username);
//			System.out.println(user.getUsername() + "########");
			if (user == null || null == user) {
				model.addAttribute("error", "您输入的用户名不存在，请您确保您已经注册了该用户。");
				return "OSAAT/basic/active";
			} else {
				String AESPW = AESCoder.encrypt(password, user.getPasswordkey());
				String MD5PW = MD5Coder.encodeMD5Hex(AESPW);
				if (!user.getPassword().equals(MD5PW)) {
					model.addAttribute("error", "对不起，您输入的密码有误，请您重新输入。");
					return "OSAAT/basic/active";
				} else if (!activecode.equals(user.getActivationCode())) {
					
						
					
					
//					System.out.println("$$$$$$$$$$$$$$$$$$对吗？"+ "User [id=" + user.getId() + ", username=" + user.getUsername() + ", password=" + user.getPassword() + ", passwordkey=" + user.getPasswordkey()
//							+ ", email=" + user.getEmail() + ", state=" + user.getState() + ", activationCode=" + user.getActivationCode() + ", integral="
//							+ user.getIntegral() + "]");
					
					
					model.addAttribute("error", "对不起，您的账号激活失败，请先确认您的激活码没有错误。激活码已经发送至您的" + user.getEmail() + "这个邮箱里面了。");
					return "OSAAT/basic/active";
				} else {
					session.setAttribute("id", user.getId());
					session.setAttribute("username", user.getUsername());
					session.setAttribute("password", user.getPassword());
					session.setAttribute("passwordkey", user.getPasswordkey());
					session.setAttribute("email", user.getEmail());
					session.setAttribute("phone", user.getPhone());
					session.setAttribute("photo", user.getPhoto());
					session.setAttribute("qq", user.getQq());
					session.setAttribute("address", user.getAddress());
					session.setAttribute("age", user.getAge());
					session.setAttribute("gender", user.getGender());
					session.setAttribute("hobbies", user.getHobbies());
					session.setAttribute("introduce", user.getIntroduce());
					session.setAttribute("userType", user.getUserType());
					session.setAttribute("state", user.getState() + 1);
					session.setAttribute("activationCode", user.getActivationCode());

					user.setState(1);
					basicService.UpdateUserInfo(user);
					
					return "redirect:/OSAAT/basic/IndexAction.action";
				}
			}
		}
	}
}
