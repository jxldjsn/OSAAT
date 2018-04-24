package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;

public interface BasicAdminMapper {

	List<Administrator> SearchAllAdmin() throws Exception;
	
	Administrator SearchAdminByName(String adminName) throws Exception;
	
	List<AdministratorRole> SearchAllRole() throws Exception;
}
