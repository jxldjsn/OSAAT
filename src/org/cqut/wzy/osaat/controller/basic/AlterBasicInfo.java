package org.cqut.wzy.osaat.controller.basic;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("OSAAT/basic/")
public class AlterBasicInfo {
	
	@Autowired
	private BasicService basicService;
	
	@RequestMapping("AlterBasicInformation")
	public String AlterUserInformation(User user, Model model, HttpSession session) throws Exception {
		
		user.setId((Long)session.getAttribute("id"));
		
		basicService.UpdateUserInfo(user);
		
		session.setAttribute("gender", user.getGender());
		session.setAttribute("age", user.getAge());
		session.setAttribute("address", user.getAddress());
		session.setAttribute("phone", user.getPhone());
		session.setAttribute("qq", user.getQq());
		session.setAttribute("hobbies", user.getHobbies());
		session.setAttribute("introduce", user.getIntroduce());
		
		model.addAttribute("result", "信息修改成功！");
		
		return "OSAAT/basic/alterInformation";
		
	}
}
