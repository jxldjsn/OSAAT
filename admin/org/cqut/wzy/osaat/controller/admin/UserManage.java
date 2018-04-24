package org.cqut.wzy.osaat.controller.admin;

import java.util.ArrayList;
import java.util.List;

import javax.jws.WebParam.Mode;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.admin.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class UserManage {

	@Autowired
	private AdminUserService adminUserService;
	
	@RequestMapping("UserList")
	private ModelAndView  AdminListAction(@RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 20;
		
		Long CountAllUser = adminUserService.CountAllUser();
		Double CountUser = Math.ceil(CountAllUser / (pageSize + 0.0));
		
		List<User> users = new ArrayList<>();
		users = adminUserService.SearchAllUser(startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("userlist", users);
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountUser);
		modelAndView.setViewName("OSAAT/admin/userlist");
		
		return modelAndView;
	}
	
	@RequestMapping("SearchUser")
	private ModelAndView SearchUser(@RequestParam("startPage") Long startPage, @RequestParam("name") String name) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 20;
		
		Long CountSearchAllUser = adminUserService.CountSearchUser(name);
		Double SearchCountUser = Math.ceil(CountSearchAllUser / (pageSize + 0.0));
		
		List<User> users = new ArrayList<>();
		users = adminUserService.SearchUserByName(name, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("userlist", users);
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchCountUser);
		modelAndView.setViewName("OSAAT/admin/searchuserresultlist");
		
		return modelAndView;
	}
	
	@RequestMapping("DeleteUser")
	private String DeleteUser(@RequestParam("id") Long id, Model model) throws Exception {
		
		adminUserService.DeleteUserById(id);
		model.addAttribute("tips", "用户已经成功删除！");
		return "redirect:/OSAAT/admin/UserList.action?startPage=1";
		
	}
	
}
