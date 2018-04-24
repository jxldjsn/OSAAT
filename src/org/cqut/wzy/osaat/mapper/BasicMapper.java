package org.cqut.wzy.osaat.mapper;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;

public interface BasicMapper {

	int SearchUserByUsername(String username);
	
	int SearchUserByEmail(String email);
	
	User SearchByUsernameReturnUser(String username);
	
	User SearchByEmailReturnUser(String email);
	
	List<Indexpage> SearchByTypeSize(Integer sourceType, Integer size);
	
	Integer SearchIntegralById(Long userId);
	
}
