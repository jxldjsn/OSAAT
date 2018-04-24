package org.cqut.wzy.osaat.mapper;

import java.util.List;

import org.cqut.wzy.osaat.entity.view.SectionView;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.entity.view.DetailInvitationView;
import org.cqut.wzy.osaat.entity.view.IndexInvitationView;
import org.cqut.wzy.osaat.entity.view.InvitationReplyView;

public interface BasicInvitationMapper {
	
	Long CountInvitation() throws Exception;
	
	int CountTodayInvitation() throws Exception;
	
	int CountYesterdayInvitation() throws Exception;
	
	List<InvitationSection> SelectAllSection() throws Exception;
	
	List<IndexInvitationView> SearchAllInvitation(Long startPage, Long pageSize) throws Exception;
	
	Long CountReplyByInvitationId(Long invitationId) throws Exception;
	
	List<InvitationReplyView> SelectPagesReplyByInvitationId(Long invitationId, Long startPage, Long size)
			throws Exception;
	
	DetailInvitationView SelectInvitationDetailViewById(Long invitationId) throws Exception;
	
	List<SectionView> SelectIndexSection() throws Exception;
	
	List<Invitation> SearchInvitationByUserId(Long userId, Long startPage, Long pageSize) throws Exception;
	
	Long CountMyInvitation(Long userId) throws Exception;
	
	Long CountInvitationByNameKey(String invitationName) throws Exception;
	
	List<Invitation> SearchPagesInvitationByName(String invitationName, Long startPage, Long pageSize) throws Exception;

	Long CountInvitationBySection(Integer sectionId) throws Exception;
	
	List<Invitation> SearchInvitationBySectionId(Integer sectionId, Long startPage, Long pageSize) throws Exception;
	
}
