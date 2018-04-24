package org.cqut.wzy.osaat.controller.bbs;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.controller.converter.CustomDateConverter;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.entity.User;
//import org.cqut.wzy.osaat.entity.view.IndexInvitationView;
import org.cqut.wzy.osaat.service.BBSService;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class AddInvitation {

	@Autowired
	private BBSService bBSService;
	
	@Autowired
	private BasicService basicService;

	@RequestMapping("AddInvitation")
	private String BBSIndexAction(@RequestParam("inviattionName") String inviattionName,
			@RequestParam("section") Integer section, @RequestParam("inviattionContent") String inviattionContent, HttpSession session,
			Model model)
			throws Exception {
		
		// 获得系统时间
		java.util.Date date = new java.util.Date();

		// 通过session得到当前用户的id
		Long userId = (Long) session.getAttribute("id");
		String userPhoto = (String) session.getAttribute("photo");
		
		Integer integral = (Integer) session.getAttribute("integral");
		String username = (String) session.getAttribute("username");
		
		//发表一个帖子加五个积分
		User user = new User();
		user.setId(userId);
		user.setIntegral(integral + 5);
		basicService.UpdateUserInfo(user);
		session.setAttribute("integral", integral + 5);

		//帖子进行保存
		Invitation invitation = new Invitation();
		invitation.setInvitationName(inviattionName);
		invitation.setInvitationContent(inviattionContent);
		invitation.setInvitationSectionid(section);
		invitation.setInvitationUserid(userId);
//		invitation.setInvitationTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		invitation.setInvitationTime(CustomDateConverter.convert(date));
		invitation.setIsEssence(0);
		
		bBSService.AddInvitation(invitation);
		model.addAttribute("message", "帖子发表成功！");
		return "redirect:/OSAAT/bbs/PreAddInvitation.action";

	}

	@RequestMapping("PreAddInvitation")
	private ModelAndView PreAdd() throws Exception {

		List<InvitationSection> sectiontList = new ArrayList<InvitationSection>();
		sectiontList = bBSService.SelectAllSection();
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("sectiontList", sectiontList);
		modelAndView.setViewName("OSAAT/bbs/addinvitation");
		return modelAndView;

	}
}
