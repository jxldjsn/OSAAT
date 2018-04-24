package org.cqut.wzy.osaat.controller.bbs;

import java.util.List;

import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.entity.view.IndexInvitationView;
import org.cqut.wzy.osaat.service.BBSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class Invitationindex {
	
	@Autowired
	private BBSService bBSService;
	
	@RequestMapping("InvitationIndex")
	private ModelAndView  BBSIndexAction(@RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 20;
		
		Long CountInvitation = bBSService.CountInvitation();
		Double CountInvitationPage = Math.ceil(bBSService.CountInvitation() / (pageSize + 0.0));
		
		
		int TodayInvitationCount = bBSService.CountTodayInvitation();
		int YesterdayInvitationCount = bBSService.CountYesterdayInvitation();
		
		
		List<InvitationSection> SectionList = bBSService.SelectAllSection();
		
		List<IndexInvitationView> InvitationList = bBSService.SearchAllInvitation(startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.addObject("SectionList", SectionList);
		modelAndView.addObject("InvitationList", InvitationList);
		
		modelAndView.addObject("CountInvitation", CountInvitation);
		modelAndView.addObject("TodayCount", TodayInvitationCount);
		modelAndView.addObject("YesterdayCount", YesterdayInvitationCount);
		
		modelAndView.addObject("pagenumber",  startPage + 1);
		modelAndView.addObject("CountInvitationPage", CountInvitationPage);
		modelAndView.setViewName("OSAAT/bbs/invitationindex");
		return modelAndView;
	}
}
