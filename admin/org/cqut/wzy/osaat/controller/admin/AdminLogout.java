package org.cqut.wzy.osaat.controller.admin;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminLogout {
	
	@RequestMapping("OSAAT/admin/AdminLogout")
	public String LogUserOut(HttpSession session) throws Exception {
		session.invalidate();
		return "OSAAT/admin/login";
	}
}
