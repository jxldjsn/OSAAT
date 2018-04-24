package org.cqut.wzy.osaat.service;

import java.util.List;

import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.entity.view.DetailInvitationView;
//import org.cqut.wzy.osaat.entity.view.IndexInvitationView;
//import org.cqut.wzy.osaat.entity.view.SectionView;
import org.cqut.wzy.osaat.entity.view.IndexInvitationView;
import org.cqut.wzy.osaat.entity.view.InvitationReplyView;
import org.cqut.wzy.osaat.entity.view.SectionView;

/**
 * 
 * <p>Title: BlogService</p>
 * <p>Description:论坛基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2016-9-14下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-8-23<br/>
 * 历史修订：<br/>
 */
public interface BBSService {
	
	/**
	 * <p>Title: CountInvitation</p>
	 * <p>Description:获取帖子的总数量 </p>
	 * @param null
	 * @return Long
	 * @throws Exception
	 */
	public Long CountInvitation() throws Exception;
	
	/**
	 * <p>Title: CountTodayInvitation</p>
	 * <p>Description:获取今天发帖的总数量 </p>
	 * @param null
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public int CountTodayInvitation() throws Exception;
	
	/**
	 * <p>Title: CountYesterdayInvitation</p>
	 * <p>Description:获取昨天发帖的总数量 </p>
	 * @param null
	 * @return int
	 * @throws Exception
	 */
	public int CountYesterdayInvitation() throws Exception;
	
	/**
	 * <p>Title: SelectAllSection</p>
	 * <p>Description:获取所有板块 </p>
	 * @param null
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<InvitationSection> SelectAllSection() throws Exception;
	
	/**
	 * <p>Title: SearchAllInvitation</p>
	 * <p>Description:获取分页后的帖子 </p>
	 * @param startPage， pageSize
	 * @return List<IndexInvitationView>
	 * @throws Exception
	 */
	public List<IndexInvitationView> SearchAllInvitation(Long startPage, Long pageSize) throws Exception; 

	/**
	 * <p>Title: AddInvitation</p>
	 * <p>Description:增加帖子 </p>
	 * @param Invitation
	 * @return void
	 * @throws Exception
	 */
	public void AddInvitation(Invitation invitation) throws Exception;
	
	/**
	 * <p>Title: SearchInvitationByUserId</p>
	 * <p>Description:根据用户Id查找用户的帖子 </p>
	 * @param Long userId
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<Invitation> SearchInvitationByUserId(Long userId, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: CountInvitationByNameKey</p>
	 * <p>Description:根据帖子名字统计帖子数量 </p>
	 * @param String invitationName
	 * @return Long
	 * @throws Exception
	 */
	public Long CountInvitationByNameKey(String invitationName) throws Exception;
	
	/**
	 * <p>Title: SearchPagesInvitationByName</p>
	 * <p>Description:根据帖子名字查找帖子 </p>
	 * @param String invitationName
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<Invitation> SearchPagesInvitationByName(String invitationName, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: SelectInvitationDetailViewById</p>
	 * <p>Description:根据帖子Id查找帖子帖子详情的视图 </p>
	 * @param Long invitationId
	 * @return DetailInvitationView
	 * @throws Exception
	 */
	public DetailInvitationView SelectInvitationDetailViewById(Long invitationId) throws Exception;
	
	/**
	 * <p>Title: CountReplyByInvitationId</p>
	 * <p>Description:根据帖子Id统计该帖子的评论的数量 </p>
	 * @param Long invitationId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountReplyByInvitationId(Long invitationId) throws Exception;
	
	/**
	 * <p>Title: SelectPagesReplyByInvitationId</p>
	 * <p>Description:根据帖子Id查找startPage页面的该帖子的评论 </p>
	 * @param Long invitationId, Long startPage, Long size
	 * @return List<InvitationReply>
	 * @throws Exception
	 */
	public List<InvitationReplyView> SelectPagesReplyByInvitationId(Long invitationId, Long startPage, Long size) throws Exception;
	
	/**
	 * <p>Title: DeleteMyInvitation</p>
	 * <p>Description:根据帖子Id删除帖子 </p>
	 * @param Long invitationId
	 * @return void
	 * @throws Exception
	 */
	public void DeleteMyInvitation(Long invitationId) throws Exception;
	
	/**
	 * <p>Title: AddInvitationReply</p>
	 * <p>Description:添加帖子的回复</p>
	 * @param InvitationReply
	 * @return void
	 * @throws Exception
	 */
	public void AddInvitationReply(InvitationReply inreply) throws Exception;
	
	/**
	 * <p>Title: SectionIndex</p>
	 * <p>Description:版块主页面的数据List </p>
	 * @param void
	 * @return List<SectionView>
	 * @throws Exception
	 */
	public List<SectionView> SectionIndex() throws Exception;
	
	/**
	 * <p>Title: SearchInvitationBySectionId</p>
	 * <p>Description:根据板块ID查找该板块下的所有帖子 </p>
	 * @param Integer sectionId
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<Invitation> SearchInvitationBySectionId(Integer sectionId, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: CountMyInvitation</p>
	 * <p>Description:根据用户Id统计该用户帖子的数量 </p>
	 * @param Long userId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountMyInvitation(Long userId) throws Exception;
	
	/**
	 * <p>Title: CountInvitationBySection</p>
	 * <p>Description:根据帖子Id统计该板块的帖子数量 </p>
	 * @param Integer sectionId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountInvitationBySection(Integer sectionId) throws Exception;
	
	/**
	 * <p>Title: UpdateInvitationById</p>
	 * <p>Description:根据帖子Id更新帖子</p>
	 * @param Invitation invitation
	 * @return void
	 * @throws Exception
	 */
	public void UpdateInvitationById(Invitation invitation) throws Exception;
	
}
