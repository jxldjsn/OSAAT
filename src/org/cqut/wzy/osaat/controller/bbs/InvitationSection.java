package org.cqut.wzy.osaat.controller.bbs;

import java.util.ArrayList;
import java.util.List;

import org.cqut.wzy.osaat.entity.view.SectionView;
import org.cqut.wzy.osaat.service.BBSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class InvitationSection {

	@Autowired
	private BBSService bBSService;
	
	@RequestMapping("SectionIndex")
	private ModelAndView SelectionOfInvitation() throws Exception {
		
		List<SectionView> sectionList = new ArrayList<SectionView>();
		
		sectionList = bBSService.SectionIndex();
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("sectionList", sectionList);
		modelAndView.setViewName("OSAAT/bbs/section");
		return modelAndView;
	}
	
	@RequestMapping("SearchInvitationBySectionId")
	private ModelAndView SearchInvitationBySectionId() throws Exception {
		List<SectionView> InvitationList = new ArrayList<SectionView>();
		
		InvitationList = bBSService.SectionIndex();
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("InvitationList", InvitationList);
		modelAndView.setViewName("OSAAT/bbs/searchresult");
		return modelAndView;
	}
}
