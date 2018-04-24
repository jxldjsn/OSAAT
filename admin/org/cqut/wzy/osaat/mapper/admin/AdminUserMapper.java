package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.entity.admin.Administrator;
import org.cqut.wzy.osaat.entity.admin.AdministratorExample;

public interface AdminUserMapper {
    
	Long CountAllUser() throws Exception;
	
	List<User> SearchAllUser(Long startPage, Long pageSize) throws Exception;
	
	Long CountSearchUser(String name) throws Exception;
	
	List<User> SearchUserByName(String name, Long startPage, Long pageSize) throws Exception;
	
	void DeleteUserById(Long id) throws Exception;
	
}