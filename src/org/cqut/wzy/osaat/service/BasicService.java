package org.cqut.wzy.osaat.service;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;


/**
 * 
 * <p>Title: BasicService</p>
 * <p>Description:用户基础service </p>
 * <p>Company: WZY社区</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2016-6-19下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2015-11-23<br/>
 * 历史修订：<br/>
 */
public interface BasicService {
	
	/**
	 * <p>Title: AddUser</p>
	 * <p>Description:根据用户注册信息保存用户实体 </p>
	 * @param user 用户实体
	 * @return void
	 * @throws Exception
	 */
	public void AddUser(User user) throws Exception;
	
	/**
	 * <p>Title: SearchUserByUsername</p>
	 * <p>Description:根据用户注册时输入的的用户名来查询是否已有该用户 </p>
	 * @param username 用户名
	 * @return int 0代表该用户还没有注册
	 * @throws Exception
	 */
	public int SearchUserByUsername(String username) throws Exception;
	
	/**
	 * <p>Title: SearchUserByEmail</p>
	 * <p>Description:根据用户注册时输入的的邮箱来查询是否已有该用户 </p>
	 * @param email 邮箱
	 * @return int 0代表该用户还没有注册
	 * @throws Exception
	 */
	public int SearchUserByEmail(String email) throws Exception;
	
	/**
	 * <p>Title: SearchByEmailReturnUser</p>
	 * <p>Description:根据用户注册时输入的的邮箱来查询该用户 </p>
	 * @param email 邮箱
	 * @return 该用户
	 * @throws Exception
	 */
	public User SearchByEmailReturnUser(String email) throws Exception;
	
	/**
	 * <p>Title: SearchByUsernameReturnUser</p>
	 * <p>Description:根据用户登的用户名来查询并返回该用户 </p>
	 * @param username 用户名
	 * @return User
	 * @throws Exception
	 */
	public User SearchByUsernameReturnUser(String username) throws Exception;
	
	/**
	 * <p>Title: UpdateUserInfo</p>
	 * <p>Description:根据用户修改用户信息时输入的用户名信息来更新用户信息 </p>
	 * @param User 用户实体
	 * @return void
	 * @throws Exception
	 */
	public void UpdateUserInfo(User user) throws Exception;
	
	/**
	 * <p>Title: SearchByTypeSize</p>
	 * <p>Description:获取网站主页的内容 </p>
	 * @param type获取的类型；size获取的长度
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	public List<Indexpage> SearchByTypeSize(Integer type, Integer size) throws Exception;
	
	/**
	 * <p>Title: SearchIntegralById</p>
	 * <p>Description:通过userId获取用户的积分 </p>
	 * @param Long userId
	 * @return int
	 * @throws Exception
	 */
	public Integer SearchIntegralById(Long userId) throws Exception;
	
}
