package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;

/**
 * 
 * <p>Title: AdminService</p>
 * <p>Description:管理员基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-9下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-9<br/>
 * 历史修订：<br/>
 */
public interface AdminService {

	/**
	 * <p>Title: SearchAllAdmin</p>
	 * <p>Description:获取所有的管理员用户 </p>
	 * @param 
	 * @return List<Administrator>
	 * @throws Exception
	 */
	public List<Administrator> SearchAllAdmin() throws Exception;
	
	/**
	 * <p>Title: SearchAdminByName</p>
	 * <p>Description:获取通过姓名管理员 </p>
	 * @param String adminName
	 * @return Administrator
	 * @throws Exception
	 */
	public Administrator SearchAdminByName(String adminName) throws Exception;
	
	/**
	 * <p>Title: SearchAllRole</p>
	 * <p>Description:获取所有的管理员角色</p>
	 * @param 
	 * @return List<AdministratorRole>
	 * @throws Exception
	 */
	public List<AdministratorRole> SearchAllRole() throws Exception;
	
	/**
	 * <p>Title: AddAdministrator</p>
	 * <p>Description:插入管理员</p>
	 * @param Administrator administrator
	 * @return void
	 * @throws Exception
	 */
	public void AddAdministrator(Administrator administrator) throws Exception;
	
	/**
	 * <p>Title: SearchAdminById</p>
	 * <p>Description:获取通过id查找管理员 </p>
	 * @param Integer id
	 * @return Administrator
	 * @throws Exception
	 */
	public Administrator SearchAdminById(Integer id) throws Exception;
	
	/**
	 * <p>Title: UpdateAdministrator</p>
	 * <p>Description:更新管理员</p>
	 * @param Administrator administrator
	 * @return void
	 * @throws Exception
	 */
	public void UpdateAdministrator(Administrator administrator) throws Exception;
	
	/**
	 * <p>Title: DeleteAdministrator</p>
	 * <p>Description:根据ID删除管理员</p>
	 * @param int id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteAdministrator(int id) throws Exception;
	
}
