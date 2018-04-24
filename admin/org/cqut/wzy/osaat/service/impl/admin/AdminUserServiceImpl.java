package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.mapper.admin.AdminUserMapper;
import org.cqut.wzy.osaat.service.admin.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminUserServiceImpl implements AdminUserService {
	
	@Autowired
	private AdminUserMapper adminUserMapper;

	/**
	 * <p>Title: CountAllUser</p>
	 * <p>Description:统计用户的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllUser() throws Exception {
		return adminUserMapper.CountAllUser();
	}

	/**
	 * <p>Title: SearchAllUser</p>
	 * <p>Description:获取所有的用户 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<User>
	 * @throws Exception
	 */
	public List<User> SearchAllUser(Long startPage, Long pageSize) throws Exception {
		return adminUserMapper.SearchAllUser(startPage, pageSize);
	}
	
	/**
	 * <p>Title: CountSearchUser</p>
	 * <p>Description:统计要搜索用户的数量 </p>
	 * @param String name
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchUser(String name) throws Exception {
		return adminUserMapper.CountSearchUser(name);
	}
	
	/**
	 * <p>Title: SearchUserByName</p>
	 * <p>Description:获取所有通过名字搜索出来的用户 </p>
	 * @param String name
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<User>
	 * @throws Exception
	 */
	public List<User> SearchUserByName(String name, Long startPage, Long pageSize) throws Exception {
		return adminUserMapper.SearchUserByName(name, startPage, pageSize);
	}
	
	/**
	 * <p>Title: DeleteUserById</p>
	 * <p>Description:根据ID删除用户 </p>
	 * @param Long id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteUserById(Long id) throws Exception {
		adminUserMapper.DeleteUserById(id);
	}
	
}
