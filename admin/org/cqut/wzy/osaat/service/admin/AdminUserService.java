package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;

/**
 * 
 * <p>Title: AdminUserService</p>
 * <p>Description:管理员管理用户的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-18下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-18<br/>
 * 历史修订：<br/>
 */
public interface AdminUserService {
	
	/**
	 * <p>Title: CountAllUser</p>
	 * <p>Description:统计用户的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllUser() throws Exception;

	/**
	 * <p>Title: SearchAllUser</p>
	 * <p>Description:获取所有的用户 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<User>
	 * @throws Exception
	 */
	public List<User> SearchAllUser(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: CountSearchUser</p>
	 * <p>Description:统计要搜索用户的数量 </p>
	 * @param String name
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchUser(String name) throws Exception;
	
	/**
	 * <p>Title: SearchUserByName</p>
	 * <p>Description:获取所有通过名字搜索出来的用户 </p>
	 * @param String name
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<User>
	 * @throws Exception
	 */
	public List<User> SearchUserByName(String name, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteUserById</p>
	 * <p>Description:根据ID删除用户 </p>
	 * @param Long id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteUserById(Long id) throws Exception;
}
