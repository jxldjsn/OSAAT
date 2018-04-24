package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameExample;

public interface BasicGameMapper {
	
	Long CountAllGame() throws Exception;
    
	List<Game> SearchAllGame(Long startPage, Long pageSize) throws Exception;
	
	Long CountSearchGameByName(String gamekey) throws Exception;
	
	List<Game> SearchGameByName(String gamekey, Long startPage, Long pageSize) throws Exception;
	
	Long SelectByUserAndGame(Long userId, Long gameid);
	
	Long CountAllUserGame(Long userId) throws Exception;
	
	List<Game> SearchGameByUserId(Long userId, Long startPage, Long pageSize) throws Exception;
	
	void DeleteMyGame(Long userId, Long gamemeId) throws Exception;
}