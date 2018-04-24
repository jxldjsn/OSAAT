package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;
import org.cqut.wzy.osaat.mapper.admin.AdministratorMapper;
import org.cqut.wzy.osaat.mapper.admin.BasicAdminMapper;
import org.cqut.wzy.osaat.service.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminServiceImpl implements AdminService {

	@Autowired
	private BasicAdminMapper basicAdminMapper;
	
	@Autowired
	private AdministratorMapper administratorMapper;
	
	/**
	 * <p>Title: SearchAllAdmin</p>
	 * <p>Description:获取所有的管理员用户 </p>
	 * @param 
	 * @return List<Administrator>
	 * @throws Exception
	 */
	@Override
	public List<Administrator> SearchAllAdmin() throws Exception {
		// TODO Auto-generated method stub
		return basicAdminMapper.SearchAllAdmin();
	}
	
	/**
	 * <p>Title: SearchAdminByName</p>
	 * <p>Description:获取通过姓名管理员 </p>
	 * @param String adminName
	 * @return Administrator
	 * @throws Exception
	 */
	public Administrator SearchAdminByName(String adminName) throws Exception {
		return basicAdminMapper.SearchAdminByName(adminName);
	}

	/**
	 * <p>Title: SearchAllRole</p>
	 * <p>Description:获取所有的管理员角色</p>
	 * @param 
	 * @return List<AdministratorRole>
	 * @throws Exception
	 */
	public List<AdministratorRole> SearchAllRole() throws Exception {
		return basicAdminMapper.SearchAllRole();
	}
	
	/**
	 * <p>Title: AddAdministrator</p>
	 * <p>Description:插入管理员</p>
	 * @param Administrator administrator
	 * @return void
	 * @throws Exception
	 */
	public void AddAdministrator(Administrator administrator) throws Exception {
		administratorMapper.insertSelective(administrator);
	}
	
	/**
	 * <p>Title: SearchAdminById</p>
	 * <p>Description:获取通过id查找管理员 </p>
	 * @param Integer id
	 * @return Administrator
	 * @throws Exception
	 */
	public Administrator SearchAdminById(Integer id) throws Exception {
		return administratorMapper.selectByPrimaryKey(id);
	}
	
	/**
	 * <p>Title: UpdateAdministrator</p>
	 * <p>Description:更新管理员</p>
	 * @param Administrator administrator
	 * @return void
	 * @throws Exception
	 */
	public void UpdateAdministrator(Administrator administrator) throws Exception {
		administratorMapper.updateByPrimaryKeySelective(administrator);
	}
	
	/**
	 * <p>Title: DeleteAdministrator</p>
	 * <p>Description:根据ID删除管理员</p>
	 * @param int id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteAdministrator(int id) throws Exception {
		administratorMapper.deleteByPrimaryKey(id);
	}
	
}
