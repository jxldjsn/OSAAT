package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.InvitationSection;

/**
 * 
 * <p>Title: AdminBBSService</p>
 * <p>Description:管理员管理论坛的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-25下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-25<br/>
 * 历史修订：<br/>
 */
public interface AdminBBSService {

	/**
	 * <p>Title: CountAllInvitation</p>
	 * <p>Description:统计所有的帖子的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllInvitation() throws Exception;
	
	/**
	 * <p>Title: SearchAllIncitation</p>
	 * <p>Description:获取所有的贴子 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<Invitation> SearchAllIncitation(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteInvitation</p>
	 * <p>Description:根据帖子Id删除帖子</p>
	 * @param Long invitationid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteInvitation(Long invitationid) throws Exception;
	
	/**
	 * <p>Title: CountSearchInvitation</p>
	 * <p>Description:统计搜索的帖子数量</p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchInvitation(String key) throws Exception;
	
	/**
	 * <p>Title: SearchInvitationByname</p>
	 * <p>Description:获取搜索的所有贴子 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Invitation>
	 * @throws Exception
	 */
	public List<Invitation> SearchInvitationByname(String key, Long startPage, Long pageSize) throws Exception;

	/**
	 * <p>Title: SearchAllSection</p>
	 * <p>Description:获取所有的板块</p>
	 * @param 
	 * @return List<InvitationSection>
	 * @throws Exception
	 */
	public List<InvitationSection> SearchAllSection() throws Exception;
	
	/**
	 * <p>Title: AddSection</p>
	 * <p>Description:添加板块</p>
	 * @param InvitationSection invitationSection
	 * @return 
	 * @throws Exception
	 */
	public void AddSection(InvitationSection invitationSection) throws Exception;
	
	/**
	 * <p>Title: UpdateSection</p>
	 * <p>Description:更新板块</p>
	 * @param InvitationSection invitationSection
	 * @return 
	 * @throws Exception
	 */
	public void UpdateSection(InvitationSection invitationSection) throws Exception;
	
	
	/**
	 * <p>Title: CountAllInvitationReply</p>
	 * <p>Description:统计所有的帖子回复的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllInvitationReply() throws Exception;
	
	/**
	 * <p>Title: SearchAllReply</p>
	 * <p>Description:获取所有的帖子回复</p>
	 * @param 
	 * @return List<InvitationReply>
	 * @throws Exception
	 */
	public List<InvitationReply> SearchAllReply(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteReply</p>
	 * <p>Description:删除回复</p>
	 * @param Long repiyId
	 * @return 
	 * @throws Exception
	 */
	public void DeleteReply(Long replyId) throws Exception;
	
	/**
	 * <p>Title: CountSearchReply</p>
	 * <p>Description:统计搜索的帖子回复的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchReply(Long replyid, Long userid, Long invitationid) throws Exception;
	
	/**
	 * <p>Title: SearchReply</p>
	 * <p>Description:获取搜索帖子回复</p>
	 * @param 
	 * @return List<InvitationReply>
	 * @throws Exception
	 */
	public List<InvitationReply> SearchReply(Long replyid, Long userid, Long invitationid, Long startPage, Long pageSize) throws Exception;
	
}
