package basic.test;

import org.cqut.wzy.osaat.util.ActiveCodeEmail;
import org.cqut.wzy.osaat.util.FindPwEmail;

public class TestEmail {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String FindPWUrl = "http://www.cnblogs.com/jxldjsn/";
		
		String FindPWAllUrl = "<div><table width=\"800\" border=\"0\" align=\"center\" cellspacing=\"0\" style=\"color: rgb(0, 0, 0); font-family: &quot;lucida Grande&quot;, Verdana, &quot;Microsoft YaHei&quot;; font-size: 14px;\"><tbody><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 24px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 40px; padding-top: 30px;\">尊敬的用户</td></tr><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 18px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 40px; padding-bottom: 10px;\"><b>您正在为您的账号找回密码，</b>请点击链接：</td></tr><tr style=\"background-color: rgb(246, 246, 246);\"><td colspan=\"2\" style=\"font-size: 15px; -webkit-font-smoothing: subpixel-antialiased; padding-left: 20px; line-height: 20px;\"><a href=\""
				+ FindPWUrl
				+ "\" target=\"_blank\" style=\"outline: none; cursor: pointer; color: rgb(42, 154, 223); display: inline-block; width: 760px;\"> "
				+ FindPWUrl + " </a></td></tr></tbody></table></div><div></div>";
		
		FindPwEmail.sendFindPwEmail(FindPWAllUrl, "1622140253@qq.com");
		System.out.println("邮件已经发送完毕");

	}

}
