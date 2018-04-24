package org.cqut.wzy.osaat.controller.bbs;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.controller.converter.CustomDateConverter;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.view.DetailInvitationView;
import org.cqut.wzy.osaat.entity.view.InvitationReplyView;
import org.cqut.wzy.osaat.service.BBSService;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/bbs/")
public class InvitationDetail {

	@Autowired
	private BBSService bBSService;
	

	@RequestMapping("InvitationDetail")
	private ModelAndView InvitationDetails(@RequestParam("invitationId") Long invitationId,
			@RequestParam("startPage") Long startPage, HttpSession session) throws Exception {

		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;

		Long TotalReply = bBSService.CountReplyByInvitationId(invitationId);
		Double CountInvitationReply = Math.ceil(TotalReply / (pageSize + 0.0));
		
		DetailInvitationView invitationDetailView = new DetailInvitationView();
		invitationDetailView = bBSService.SelectInvitationDetailViewById(invitationId);
		
		List<InvitationReplyView> replyList = new ArrayList<InvitationReplyView>();
		replyList = bBSService.SelectPagesReplyByInvitationId(invitationId, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();

		modelAndView.addObject("invitation", invitationDetailView);
		modelAndView.addObject("replyList", replyList);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("CountInvitationReply", CountInvitationReply);
		modelAndView.setViewName("OSAAT/bbs/invitationdetail");
		return modelAndView;

	}
	
	@RequestMapping("AddComment")
	private String AddInvitationComment(@RequestParam("invitationId") Long invitationId,
			@RequestParam("commentcontent") String commentcontent, HttpSession session) throws Exception {
		
		// 获得系统时间
		java.util.Date date = new java.util.Date();
		String replyUserName = (String)session.getAttribute("username");
		Long replyUserId = (Long)session.getAttribute("id");
//		String replyUserPhoto = (String)session.getAttribute("photo");
//		Integer replyUserIntegral = (Integer)session.getAttribute("integral");
		
		InvitationReply invitationReply = new InvitationReply();
		
		
		invitationReply.setInvitationid(invitationId);
		invitationReply.setReplyContent(commentcontent);
//		invitationReply.setReplyTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		invitationReply.setReplyTime(CustomDateConverter.convert(date));
		invitationReply.setReplyUserId(replyUserId);
		
		bBSService.AddInvitationReply(invitationReply);
		

		Invitation invitation = new Invitation();
		
		invitation.setLastreplyName(replyUserName);
		invitation.setLastreplyTime(CustomDateConverter.convert(date));
		invitation.setInvitationId(invitationId);
		
		bBSService.UpdateInvitationById(invitation);
				
		return "redirect:/OSAAT/bbs/InvitationDetail.action?invitationId=" + invitationId + "&startPage=1";
		
	}

}
