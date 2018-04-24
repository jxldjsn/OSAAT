package org.cqut.wzy.osaat.controller.bbs;



import java.util.List;

import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.service.BBSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class SearchInvitation {

	@Autowired
	private BBSService bBSService;
	
	@RequestMapping("SearchInvitation")
	private ModelAndView SearchByInvitationName(@RequestParam("invitationkey") String invitationkey, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;
		
		Long titleCountBlog = bBSService.CountInvitationByNameKey(invitationkey);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		List<Invitation> InvitationList = bBSService.SearchPagesInvitationByName(invitationkey, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("InvitationList", InvitationList);
		
		modelAndView.addObject("invitationkey", invitationkey);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/bbs/searchresult");
		return modelAndView;
	}
	
	@RequestMapping("SearchBySectionId")
	private ModelAndView SearchInvitationBySectionId(@RequestParam("sectionId") Integer sectionId, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;
		
		Long titleCountBlog = bBSService.CountInvitationBySection(sectionId);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		List<Invitation> InvitationList = bBSService.SearchInvitationBySectionId(sectionId, startPage * pageSize, pageSize);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("InvitationList", InvitationList);
		
		modelAndView.addObject("sectionId", sectionId);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/bbs/searchbysectionresult");
		return modelAndView;
		
	}
} 
