package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.InvitationSection;

public interface AdminBBSMapper {
	
	Long CountAllInvitation() throws Exception;
	
	List<Invitation> SearchAllIncitation(Long startPage, Long pageSize) throws Exception;
	
	void DeleteInvitation(Long invitationid) throws Exception;
	
	Long CountSearchInvitation(String key) throws Exception;
	
	List<Invitation> SearchInvitationByname(String key, Long startPage, Long pageSize) throws Exception;
	
	List<InvitationSection> SearchAllSection() throws Exception;
	
	void AddSection(InvitationSection invitationSection) throws Exception;
	
	void UpdateSection(InvitationSection invitationSection) throws Exception;
	
	Long CountAllInvitationReply() throws Exception;
	
	List<InvitationReply> SearchAllReply(Long startPage, Long pageSize) throws Exception;
	
	void DeleteReply(Long replyId) throws Exception;
	
	Long CountSearchReply(@Param("replyid")Long replyid, @Param("userid")Long userid, @Param("invitationid")Long invitationid) throws Exception;
	
	List<InvitationReply> SearchReply(@Param("replyid")Long replyid, @Param("userid")Long userid, @Param("invitationid")Long invitationid, @Param("startPage")Long startPage, @Param("pageSize")Long pageSize) throws Exception;
	
}
