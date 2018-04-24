package org.cqut.wzy.osaat.controller.admin;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;
import org.cqut.wzy.osaat.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/admin/")
public class AdminManage {

	@Autowired
	private AdminService adminService;
	
	@RequestMapping("AdminList")
	private String  AdminListAction(Model model, HttpSession session) throws Exception {
		Integer adminrole = (Integer) session.getAttribute("adminroleId");
		
		if (adminrole.equals(1)) {
			List<Administrator> administrators = new ArrayList<>();
			administrators = adminService.SearchAllAdmin();
			
			model.addAttribute("administrators", administrators);
			
			return "OSAAT/admin/manageadmin";
		} else {
			return "OSAAT/admin/permissiontips";
		}
		
	}
	
	@RequestMapping("PreAddAdmin")
	private String PreAddAdminAction(Model model, HttpSession session) throws Exception {
		Integer adminrole = (Integer) session.getAttribute("adminroleId");
		if (adminrole.equals(1)) {
			List<AdministratorRole> roles = new ArrayList<>();
			roles = adminService.SearchAllRole();
			model.addAttribute("roleList", roles);
			
			return "OSAAT/admin/addadmin";
		} else {
			return "OSAAT/admin/permissiontips";
		}
		
	}
	
	@RequestMapping("AddAdmin")
	private String AddAdminAction(@RequestParam("name") String name, @RequestParam("password") String password, @RequestParam("photo") String photo, @RequestParam("role") Integer role, Model model, HttpSession session) throws Exception {
		Integer adminrole = (Integer) session.getAttribute("adminroleId");
		if (adminrole.equals(1)) {
			Administrator administratorSearch = new Administrator();
			administratorSearch = adminService.SearchAdminByName(name);
			
			if (administratorSearch == null || null == administratorSearch) {
				Administrator administrator = new Administrator();
				administrator.setName(name);
				administrator.setPassword(password);
				administrator.setPhoto(photo);
				administrator.setRoleId(role);
				
				adminService.AddAdministrator(administrator);
				
				return "redirect:/OSAAT/admin/AdminList.action";
			} else {
				List<AdministratorRole> roles = new ArrayList<>();
				roles = adminService.SearchAllRole();
				model.addAttribute("roleList", roles);
				model.addAttribute("Tips", "对不起，用户名重复，请在名字后面加部门或职工编号");
				
				return "OSAAT/admin/addadmin";
			}
		} else {
			return "OSAAT/admin/permissiontips";
		}
		
	}
	
	
	@RequestMapping("PreAlterAdmin")
	private String PreAlterAdminAction(@RequestParam("id") Integer id, Model model) throws Exception {
		
		List<AdministratorRole> roles = new ArrayList<>();
		roles = adminService.SearchAllRole();
		model.addAttribute("roleList", roles);
		
		Administrator administrator = new Administrator();
		administrator = adminService.SearchAdminById(id);
		model.addAttribute("administrator", administrator);
		
		return "OSAAT/admin/alteradmin";
		
	}
	
	
	@RequestMapping("AlterAdmin")
	private String AlterAdminAction(@RequestParam("id") Integer id,@RequestParam("name") String name, @RequestParam("password") String password, @RequestParam("photo") String photo, @RequestParam("role") Integer role, Model model, HttpSession session) throws Exception {
		Integer adminrole = (Integer) session.getAttribute("adminroleId");
		if (adminrole.equals(1)) {
			Administrator administrator = new Administrator();
			administrator.setId(id);
			administrator.setName(name);
			administrator.setPassword(password);
			administrator.setPhoto(photo);
			administrator.setRoleId(role);
			
			adminService.UpdateAdministrator(administrator);
			
			return "redirect:/OSAAT/admin/AdminList.action";
		} else {
			return "OSAAT/admin/permissiontips";
		}
	}
	
	@RequestMapping("DeleteAdmin")
	private String DeleteAdminAction(@RequestParam("id") Integer id, Model model, HttpSession session) throws Exception {
		Integer adminrole = (Integer) session.getAttribute("adminroleId");
		if (adminrole.equals(1)) {
		
			adminService.DeleteAdministrator(id);
			model.addAttribute("Tips", "用户已经成功删除");
			
			return "redirect:/OSAAT/admin/AdminList.action";
		} else {
			return "OSAAT/admin/permissiontips";
		}
	}
	
}
