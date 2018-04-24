package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.entity.GameType;

public interface AdminGameMapper {

	Long CountAllGame() throws Exception;
	
	List<Game> SearchAllGame(Long startPage, Long pageSize) throws Exception;
	
	List<GameType> SearchAllGameType() throws Exception;
	
	void AddGame(Game game) throws Exception;
	
	void UpdateGame(Game game) throws Exception;
	
	void DeleteGame(Long gameid) throws Exception;
	
	Game SearchGameByID(Long gameid) throws Exception;
	
	Long CountSearchGame(String key) throws Exception;
	
	List<Game> SearchGameByName(String key, Long startPage, Long pageSize) throws Exception;
	
	void AddGameType(GameType gameType) throws Exception;
	
	void UpdateGameType(GameType gameType) throws Exception;
	
	Long CountAllGameMe() throws Exception;
	
	List<GameMe> UserGameList(Long startPage, Long pageSize) throws Exception;
	
	void DeleteGameMe(Long gamemeid) throws Exception;
}
