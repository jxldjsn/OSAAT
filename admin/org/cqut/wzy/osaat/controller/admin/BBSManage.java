package org.cqut.wzy.osaat.controller.admin;

import java.util.ArrayList;
import java.util.List;

import javax.jws.WebParam.Mode;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.service.admin.AdminBBSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class BBSManage {

	@Autowired
	private AdminBBSService adminBBSService;
	
	@RequestMapping("InvitationList")
	private ModelAndView InvitationList(@RequestParam("startPage") Long startPage) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllInvitation = adminBBSService.CountAllInvitation();
		Double InvitationPageSize = Math.ceil(CountAllInvitation / (pageSize + 0.0));
		
		
		List<Invitation> invitations = new ArrayList<>();
		invitations = adminBBSService.SearchAllIncitation(startPage, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("invitationlist", invitations);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", InvitationPageSize);
		modelAndView.setViewName("OSAAT/admin/maininvitationlist");

		return modelAndView;
	}
	
	@RequestMapping("DeleteInvitation")
	private String DeleteInvitation(@RequestParam("invitationid") Long invitationid, Model model) throws Exception {
		
		adminBBSService.DeleteInvitation(invitationid);
		
		model.addAttribute("Tips", "帖子已经成功删除！");
		
		return "redirect:/OSAAT/admin/InvitationList.action?startPage=1";
		
	}
	
	@RequestMapping("SearchInvitation")
	private ModelAndView SearchInvitation(@RequestParam("startPage") Long startPage, @RequestParam("key") String key) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountSearchInvitation = adminBBSService.CountSearchInvitation(key);
		Double SearchInvitationPage = Math.ceil(CountSearchInvitation / (pageSize + 0.0));
		
		
		List<Invitation> invitations = new ArrayList<>();
		invitations = adminBBSService.SearchInvitationByname(key, startPage, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("invitationlist", invitations);
		modelAndView.addObject("key", key);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchInvitationPage);
		modelAndView.setViewName("OSAAT/admin/maininvitationsearchlist");

		return modelAndView;
		
	}
	
	@RequestMapping("SearchAllSection")
	private String SearchAllSection(Model model) throws Exception {
		List<InvitationSection> invitationSections = new ArrayList<>();
		invitationSections = adminBBSService.SearchAllSection();
		model.addAttribute("sectionlist", invitationSections);
		
		return "OSAAT/admin/maininvitationsectionlist";
		
	}
	
	@RequestMapping("AddSection")
	private String AddSection(@RequestParam("sectionname") String sectionname, @RequestParam("sectionintroduce") String sectionintroduce) throws Exception {
		
		InvitationSection invitationSection = new InvitationSection();
		invitationSection.setSectionName(sectionname);
		invitationSection.setSectionIntroduce(sectionintroduce);
		
		adminBBSService.AddSection(invitationSection);
		
		return "redirect:/OSAAT/admin/SearchAllSection.action";
	}
	
	@RequestMapping("PreUpdateSection")
	private String PreUpdateSection(@RequestParam("sectionid") Integer sectionid, @RequestParam("sectionname") String sectionname, @RequestParam("sectionintroduce") String sectionintroduce, Model model) throws Exception {
		model.addAttribute("sectionid", sectionid);
		model.addAttribute("sectionname", sectionname);
		model.addAttribute("sectionintroduce", sectionintroduce);
		
		return "OSAAT/admin/maininvitationsectionalter";
		
	}
	
	
	@RequestMapping("UpdateSection")
	private String UpdateSection(@RequestParam("sectionid") Integer sectionid, @RequestParam("sectionname") String sectionname, @RequestParam("sectionintroduce") String sectionintroduce) throws Exception {
		
		InvitationSection invitationSection = new InvitationSection();
		invitationSection.setSectionId(sectionid);
		invitationSection.setSectionName(sectionname);
		invitationSection.setSectionIntroduce(sectionintroduce);
		
		adminBBSService.UpdateSection(invitationSection);
		
		return "redirect:/OSAAT/admin/SearchAllSection.action";
		
	}
	
	@RequestMapping("BBSReplyList")
	private ModelAndView BBSReplyList(@RequestParam("startPage") Long startPage) throws Exception {
		
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllInvitationReply = adminBBSService.CountAllInvitationReply();
		Double ReplyPageSize = Math.ceil(CountAllInvitationReply / (pageSize + 0.0));
		
		
		List<InvitationReply> invitationReplies = new ArrayList<>();
		invitationReplies = adminBBSService.SearchAllReply(startPage, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("replylist", invitationReplies);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", ReplyPageSize);
		modelAndView.setViewName("OSAAT/admin/maininvitationreplylist");

		return modelAndView;
		
	}
	
	@RequestMapping("DeleteReply")
	private String DeleteReply(@RequestParam("replyId") Long replyId, Model model) throws Exception {
		adminBBSService.DeleteReply(replyId);
		
		model.addAttribute("Tips", "回复已经完全删除！");
		
		return "redirect:/OSAAT/admin/BBSReplyList.action?startPage=1";
	}
	
	@RequestMapping("SearchReply")
	private ModelAndView SearchReply(@RequestParam("startPage") Long startPage, @RequestParam("type") Integer type, @RequestParam("key") String key) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		Long replyid = null;
		Long userid = null;
		Long invitationid = null;

		if (type.equals(1)) {
			replyid = Long.parseLong(key);
		} else if (type.equals(2)) {
			userid = Long.parseLong(key);
		} else {
			invitationid = Long.parseLong(key);
		}
		
		long pageSize = 10;
		
		Long CountSearchreply = adminBBSService.CountSearchReply(replyid, userid, invitationid);
		Double SearchreplyPage = Math.ceil(CountSearchreply / (pageSize + 0.0));
		
		List<InvitationReply> invitationReplies = new ArrayList<>();
		invitationReplies = adminBBSService.SearchReply(replyid, userid, invitationid,  startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("replylist", invitationReplies);
		
		modelAndView.addObject("type", type);
		modelAndView.addObject("key", key);
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchreplyPage);
		
		modelAndView.setViewName("OSAAT/admin/maininvitationreplysearchlist");

		return modelAndView;
	}
	
}
