package org.cqut.wzy.osaat.controller.basic;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LogoutController{
	
	@RequestMapping("OSAAT/basic/Logout")
	public String LogUserOut(HttpSession session) throws Exception {
		session.invalidate();
		return "redirect:/OSAAT/basic/IndexAction.action";
	}

}
