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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/basic/")
public class LoginAction {

	@Autowired
	private BasicService basicService;

	@RequestMapping(value = "LoginAction", method = RequestMethod.POST)
	private String Login(@RequestParam("username") String username, @RequestParam("password") String password,
			Model model, HttpSession session) throws Exception {

		if (username.equals("") || "".equals(username)) {
			model.addAttribute("Lusername", "对不起，请您输入用户名后登陆！");
			return "OSAAT/basic/login";
		} else if (password.equals("") || "".equals(password)) {
			model.addAttribute("Lpassword", "对不起，请您输入密码后登陆！");
			return "OSAAT/basic/login";
		} else {
			User user = new User();
			user = basicService.SearchByUsernameReturnUser(username);
			if (user == null || null == user) {
				model.addAttribute("Lusername", "对不起，您登陆的用户不存在。请您注册后登陆！");
				return "OSAAT/basic/login";
			} else {
				String AESPW = AESCoder.encrypt(password, user.getPasswordkey());
				String MD5PW = MD5Coder.encodeMD5Hex(AESPW);
				if (!MD5PW.equals(user.getPassword())) {
					model.addAttribute("Lpassword", "对不起，您的密码输入错误，请重试！");
					return "OSAAT/basic/login";
				} else {
					if (!user.getState().equals(1)) {
						model.addAttribute("error", "尊敬的" + username + "用户，您的账户还没与激活，请您先激活您的账户！");
						model.addAttribute("username", username);
						model.addAttribute("password", password);
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
						session.setAttribute("type", user.getUserType());
						session.setAttribute("state", user.getState());
						session.setAttribute("activationCode", user.getActivationCode());
						session.setAttribute("integral", user.getIntegral());

						return "redirect:/OSAAT/basic/IndexAction.action"; 
					}
				}
			}
		}
	}
}
