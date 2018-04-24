package org.cqut.wzy.osaat.controller.admin;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.service.BasicService;
import org.cqut.wzy.osaat.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/admin/")
public class AdminLogin {
	
	@Autowired
	private AdminService adminService;
	
	@RequestMapping("AdminLogin")
	private String  AdminLoginAction(@RequestParam("dtoUserName") String username, @RequestParam("password") String password, Model model,  HttpSession session) throws Exception {
		
		if (username.equals("") || "".equals(username)) {
			model.addAttribute("Tips", "对不起，请您输入用户名后登陆！");
			return "OSAAT/admin/login";
		} else if (password.equals("") || "".equals(password)) {
			model.addAttribute("Tips", "对不起，请您输入密码后登陆！");
			return "OSAAT/admin/login";
		} else {
			Administrator administrator = new Administrator();
			administrator = adminService.SearchAdminByName(username);
			if (administrator == null || null == administrator) {
				model.addAttribute("Tips", "对不起，您登陆的用户不存在。请您联系管理员！");
				return "OSAAT/admin/login";
			} else if (!password.equals(password)) {
				model.addAttribute("Tips", "对不起，您登陆的密码错误，请重试！");
				return "OSAAT/admin/login";
			} else {
				session.setAttribute("adminid", administrator.getId());
				session.setAttribute("adminusername", administrator.getName());
				session.setAttribute("adminpassword", administrator.getPassword());
				session.setAttribute("adminphoto", administrator.getPhoto());
				session.setAttribute("adminroleId", administrator.getRoleId());
				
				return "redirect:/OSAAT/admin/AdminIndex.action"; 
			}
		}
	}

}
