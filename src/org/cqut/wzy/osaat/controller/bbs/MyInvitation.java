package org.cqut.wzy.osaat.controller.bbs;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.service.BBSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class MyInvitation {

	@Autowired
	private BBSService bBSService;
	
	@RequestMapping("MyInvitation")
	private ModelAndView AllMyInvitation(@RequestParam("startPage") Long startPage, HttpSession session) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;
		
		Long userId = (Long) session.getAttribute("id");
		
		Long CountMyInvitation = bBSService.CountMyInvitation(userId);
		Double CountMyInvitationPage = Math.ceil(CountMyInvitation / (pageSize + 0.0));
		
		
		List<Invitation> myInvitationList = new ArrayList<Invitation>();
		myInvitationList = bBSService.SearchInvitationByUserId(userId, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("myInvitationList", myInvitationList);
	
		modelAndView.addObject("pagenumber",  startPage + 1);
		modelAndView.addObject("CountInvitationPage", CountMyInvitationPage);
		modelAndView.setViewName("OSAAT/bbs/myinvitation");
		
		return modelAndView;
		
	}
	
	@RequestMapping("MyInvitationDelete")
	private String DeleteMyinvitation(@RequestParam("invitationId") Long invitationId, Model model) throws Exception {
		
		bBSService.DeleteMyInvitation(invitationId);
		model.addAttribute("message", "帖子已经成功删除！！");
		return "redirect:/OSAAT/bbs/MyInvitation.action?startPage=1";
		
	}
}
