package org.cqut.wzy.osaat.service.impl;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.mapper.BasicMapper;
import org.cqut.wzy.osaat.mapper.UserMapper;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * <p>
 * Title: BasicServiceImpl
 * </p>
 * <p>
 * Description:用户基础服务管理
 * </p>
 * <p>
 * Company: WZY
 * </p>
 * 
 * @author wangzhiyong QQ:1366834931
 * @date 2016-6-19下午3:48:09
 * @version 版本号：100-000-000<br/>
 *          创建日期：2015-11-23<br/>
 *          历史修订：<br/>
 */
public class BasicServiceImpl implements BasicService {

	@Autowired
	private UserMapper userMapper;

	@Autowired
	private BasicMapper basicMapper;

	/**
	 * <p>
	 * Title: AddUser
	 * </p>
	 * <p>
	 * Description:根据用户注册信息保存用户实体
	 * </p>
	 * 
	 * @param user
	 *            用户实体
	 * @return void
	 * @throws Exception
	 */
	@Override
	public void AddUser(User user) throws Exception {
		// TODO Auto-generated method stub
		userMapper.insert(user);
	}

	/**
	 * <p>
	 * Title: SearchUserByUsername
	 * </p>
	 * <p>
	 * Description:根据用户注册的用户名查找用户实体看是否已注册
	 * </p>
	 * 
	 * @param username
	 *            用户名
	 * @return int 0代表该用户名还没有注册
	 * @throws Exception
	 */
	@Override
	public int SearchUserByUsername(String username) throws Exception {
		// TODO Auto-generated method stub
		return basicMapper.SearchUserByUsername(username);
	}
	
	/**
	 * <p>
	 * Title: SearchUserByEmail
	 * </p>
	 * <p>
	 * Description:根据用户注册时的邮箱查找用户实体看是否已注册
	 * </p>
	 * 
	 * @param username
	 *            用户名
	 * @return int 0代表该用户名还没有注册
	 * @throws Exception
	 */
	public int SearchUserByEmail(String email) throws Exception {
		return basicMapper.SearchUserByEmail(email);
	}

	/**
	 * <p>
	 * Title: SearchByUsernameReturnUser
	 * </p>
	 * <p>
	 * Description:根据用户登陆的用户名查找并返回用户实体
	 * </p>
	 * @param username 用户名
	 * @return User
	 * @throws Exception
	 */
	@Override
	public User SearchByUsernameReturnUser(String username) throws Exception {
		// TODO Auto-generated method stub
		return basicMapper.SearchByUsernameReturnUser(username);
	}

	/**
	 * <p>
	 * Title: UpdateUserInfo
	 * </p>
	 * <p>
	 * Description:根据用户修改用户信息时输入的用户名信息来更新用户信息
	 * </p>
	 * @param User 用户实体
	 * @return void
	 * @throws Exception
	 */
	@Override
	public void UpdateUserInfo(User user) throws Exception {
		// TODO Auto-generated method stub
		userMapper.updateByPrimaryKeySelective(user);
	}
	
	/**
	 * <p>Title: SearchByTypeSize</p>
	 * <p>Description:获取网站主页的内容 </p>
	 * @param type获取的类型；size获取的长度
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	@Override
	public List<Indexpage> SearchByTypeSize(Integer type, Integer size) throws Exception {
		// TODO Auto-generated method stub
		return basicMapper.SearchByTypeSize(type, size);
	}

	@Override
	public Integer SearchIntegralById(Long userId) throws Exception {
		// TODO Auto-generated method stub
		return basicMapper.SearchIntegralById(userId);
	}

	@Override
	public User SearchByEmailReturnUser(String email) throws Exception {
		// TODO Auto-generated method stub
		return basicMapper.SearchByEmailReturnUser(email);
	}

}
