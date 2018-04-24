package org.cqut.wzy.osaat.controller.basic;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.cqut.wzy.osaat.util.ActiveCode;
import org.cqut.wzy.osaat.util.ActiveCodeEmail;
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
public class RegisterActionController {

	@Autowired
	private BasicService basicService;

	@RequestMapping(value = "RegisterAction", method = RequestMethod.POST)
	private String AddUser(@RequestParam("username") String username, @RequestParam("password") String password,
			@RequestParam("rpassword") String rpassword, @RequestParam("email") String email, Model model)
					throws Exception {

		if (username.equals("") || "".equals(username)) {
			model.addAttribute("RusernameError", "请您输入您的用户名！");
			return "OSAAT/basic/login";
		} else {
			if (basicService.SearchUserByUsername(username) != 0) {
				model.addAttribute("RusernameError", "对不起，该用户名已经注册！");
				return "OSAAT/basic/login";
			} else if (username.length() < 3) {
				model.addAttribute("RusernameError", "请输入的用户名的长度必须在3到20之间！");
				return "OSAAT/basic/login";
			} else if (password.equals("") || "".equals(password)) {
				model.addAttribute("RpasswordError", "请您输入您的密码！");
				return "OSAAT/basic/login";
			} else if (password.length() < 3) {
				model.addAttribute("RpasswordError", "请输入的密码的长度必须在3到20之间！");
				return "OSAAT/basic/login";
			} else if (rpassword.equals("") || "".equals(rpassword)) {
				model.addAttribute("RrpasswordError", "请您重复输入您的密码！");
				return "OSAAT/basic/login";
			} else if (!password.equals(rpassword)) {
				model.addAttribute("RrpasswordError", "输入的两次密码不一样！");
				return "OSAAT/basic/login";
			} else if (email.equals("") || "".equals(email)) {
				model.addAttribute("RemailError", "请您输入您的邮箱！");
				return "OSAAT/basic/login";
			} else if (basicService.SearchUserByEmail(email) != 0) {
				model.addAttribute("RemailError", "对不起，该邮箱已经注册，请换一个邮箱！");
				return "OSAAT/basic/login";
			} else {
				String check = "^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$";
				Pattern regex = Pattern.compile(check);
				Matcher matcher = regex.matcher(email);
				boolean isMatched = matcher.matches();
				if (!isMatched) {
					model.addAttribute("RemailError", "您输入的邮箱格式有误，请重新输入！");
					return "OSAAT/basic/login";
				} else {
					String activecode = ActiveCode.getActiveCode();
					String emaileMassage = "尊敬的用户，您好！欢迎您成为户外运动及娱乐部落的一员，您的激活码是：" + activecode + "，为了您更方便的享受服务，请您尽快激活您的账号！";
					String passwordkey = AESCoder.initKey();
					String encryptpw = AESCoder.encrypt(password, passwordkey);
					String MD5pw = MD5Coder.encodeMD5Hex(encryptpw);

					User user = new User();
					user.setUsername(username);
					user.setPassword(MD5pw);
					user.setPasswordkey(passwordkey);
					user.setEmail(email);
					user.setPhoto("HeadPortrait/DefaultAvatar/user2.jpg");
					user.setState(0);
					user.setUserType(2);
					user.setIntegral(0);
					user.setActivationCode(activecode);
					
					// 发送邮件
					ActiveCodeEmail.sendActiveCodeEmail(emaileMassage, email);

					//添加用户
					basicService.AddUser(user);

					model.addAttribute("error", "尊敬的" + username + "用户，为了更好的为您服务请您激活您账户！");
					model.addAttribute("username", username);
					model.addAttribute("password", password);
					return "OSAAT/basic/active";
				}
			}

		}

	}

}
