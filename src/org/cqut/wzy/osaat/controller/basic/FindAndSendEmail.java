package org.cqut.wzy.osaat.controller.basic;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.BasicService;
import org.cqut.wzy.osaat.util.AESCoder;
import org.cqut.wzy.osaat.util.ActiveCodeEmail;
import org.cqut.wzy.osaat.util.FindPwEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/basic/")
public class FindAndSendEmail {

	@Autowired
	private BasicService basicService;

	@RequestMapping("FindAndSendEmail")
	private String FindAndSendTheEmail(@RequestParam("email") String email, Model model, HttpServletRequest request)
			throws Exception {
		
//		System.out.println("##########################################");

		User user = new User();
		user = basicService.SearchByEmailReturnUser(email);

		if (user == null || null == user) {
			model.addAttribute("LfindPw", "对不起，请您输入的邮箱尚未注册！");
			return "OSAAT/basic/login";
		} else {
			String check = "^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$";
			Pattern regex = Pattern.compile(check);
			Matcher matcher = regex.matcher(email);
			boolean isMatched = matcher.matches();
			if (!isMatched) {
				model.addAttribute("LfindPw", "您输入的邮箱格式有误，请重新输入！");
				return "OSAAT/basic/login";
			} else {

				// 设置过期时间为1天
				Calendar c = Calendar.getInstance();
				c.add(Calendar.DAY_OF_MONTH, 1);
				Date outdate = c.getTime();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				sdf.format(outdate);
				user.setFindPwOutdate(outdate);
				
				user.setFindAlready(0);

				basicService.UpdateUserInfo(user);

				// 发送邮件
				// ①对用户名进行加密
				String passwordkey = user.getPasswordkey();
				String username = user.getUsername();
				username = AESCoder.encrypt(username, passwordkey);
				String parameters = passwordkey + "-" + username;
				
//				System.out.println(parameters);
				

				String FindPWUrl = "http://" + request.getServerName() // 服务器地址
						+ ":" + request.getServerPort() // 端口号
						+ request.getContextPath() + "/OSAAT/basic/FindAndResetPw.action?parameters=" + parameters; // 项目名称

				String FindPWAllUrl = "<div><table width=\"800\" border=\"0\" align=\"center\" cellspacing=\"0\" style=\"color: rgb(0, 0, 0); font-family: &quot;lucida Grande&quot;, Verdana, &quot;Microsoft YaHei&quot;; font-size: 14px;\"><tbody><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 24px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 40px; padding-top: 30px;\">尊敬的" + user.getUsername() +"用户</td></tr><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 18px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 40px; padding-bottom: 10px;\"><b>您正在为您的账号找回密码，</b>请点击链接：</td></tr><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 15px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 20px;\"><a href=\""
						+ FindPWUrl
						+ "\" target=\"_blank\" style=\"outline: none; cursor: pointer; color: rgb(42, 154, 223); display: inline-block; width: 760px;\"> "
						+ FindPWUrl + " </a></td></tr></tbody></table></div><div></div>";
				
				FindPwEmail.sendFindPwEmail(FindPWAllUrl, email);
				
				model.addAttribute("LfindPw", "您好，重置密码的链接已经发送至您的邮箱，你有一天的时间重置你的密码，请您注意及时修改！");
				return "OSAAT/basic/login";
			}
		}
	}
}
