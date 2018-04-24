package org.cqut.wzy.osaat.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("OSAAT/admin/")
public class AdminIndex {
	
	

	@RequestMapping("AdminIndex")
	private String  AdminIndexAction(Model model) throws Exception {
		
		return "OSAAT/admin/index";
	}
	
	
	
}
