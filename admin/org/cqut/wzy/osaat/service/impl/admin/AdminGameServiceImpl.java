package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.entity.GameType;
import org.cqut.wzy.osaat.mapper.admin.AdminBlogMapper;
import org.cqut.wzy.osaat.mapper.admin.AdminGameMapper;
import org.cqut.wzy.osaat.service.admin.AdminGameService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminGameServiceImpl implements AdminGameService {
	
	@Autowired
	private AdminGameMapper adminGameMapper;
	
	/**
	 * <p>Title: CountAllGame</p>
	 * <p>Description:统计所有游戏的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGame() throws Exception {
		return adminGameMapper.CountAllGame();
	}
	
	/**
	 * <p>Title: SearchAllGame</p>
	 * <p>Description:获取所有的游戏 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchAllGame(Long startPage, Long pageSize) throws Exception {
		return adminGameMapper.SearchAllGame(startPage, pageSize);
	}
	
	/**
	 * <p>Title: SearchAllGameType</p>
	 * <p>Description:获取所有的游戏类型 </p>
	 * @param 
	 * @return List<GameType>
	 * @throws Exception
	 */
	public List<GameType> SearchAllGameType() throws Exception {
		return adminGameMapper.SearchAllGameType();
	}
	
	/**
	 * <p>Title: AddGame</p>
	 * <p>Description:添加游戏 </p>
	 * @param Game game
	 * @return 
	 * @throws Exception
	 */
	public void AddGame(Game game) throws Exception {
		adminGameMapper.AddGame(game);
	}
	
	/**
	 * <p>Title: UpdateGame</p>
	 * <p>Description:更新游戏 </p>
	 * @param Game game
	 * @return 
	 * @throws Exception
	 */
	public void UpdateGame(Game game) throws Exception {
		adminGameMapper.UpdateGame(game);
	}
	
	/**
	 * <p>Title: DeleteGame</p>
	 * <p>Description:删除游戏 </p>
	 * @param Long gameid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteGame(Long gameid) throws Exception {
		adminGameMapper.DeleteGame(gameid);
	}
	
	/**
	 * <p>Title: SearchGameByID</p>
	 * <p>Description:根据Id查询游戏 </p>
	 * @param Long gameid
	 * @return Game
	 * @throws Exception
	 */
	public Game SearchGameByID(Long gameid) throws Exception {
		return adminGameMapper.SearchGameByID(gameid);
	}
	
	/**
	 * <p>Title: CountSearchGame</p>
	 * <p>Description:根据游戏关键字查询游戏 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchGame(String key) throws Exception {
		return adminGameMapper.CountSearchGame(key);
	}
	
	/**
	 * <p>Title: SearchGameByName</p>
	 * <p>Description:根据游戏关键字搜索游戏 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByName(String key, Long startPage, Long pageSize) throws Exception {
		return adminGameMapper.SearchGameByName(key, startPage, pageSize);
	}
	
	/**
	 * <p>Title: AddGameType</p>
	 * <p>Description:添加游戏类型 </p>
	 * @param GameType gameType
	 * @return 
	 * @throws Exception
	 */
	public void AddGameType(GameType gameType) throws Exception {
		adminGameMapper.AddGameType(gameType);
	}
	
	/**
	 * <p>Title: UpdateGameType</p>
	 * <p>Description:更新游戏类型 </p>
	 * @param GameType gameType
	 * @return 
	 * @throws Exception
	 */
	public void UpdateGameType(GameType gameType) throws Exception {
		adminGameMapper.UpdateGameType(gameType);
	}
	
	
	/**
	 * <p>Title: CountAllGameMe</p>
	 * <p>Description:获取所有的用户游戏数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGameMe() throws Exception {
		return adminGameMapper.CountAllGameMe();
	}
	
	/**
	 * <p>Title: UserGameList</p>
	 * <p>Description:获取所有用户的游戏 </p>
	 * @param 
	 * @return  List<GameMe> 
	 * @throws Exception
	 */
	public List<GameMe> UserGameList(Long startPage, Long pageSize) throws Exception {
		return adminGameMapper.UserGameList(startPage, pageSize);
	}
	
	/**
	 * <p>Title: DeleteGameMe</p>
	 * <p>Description:删除用户的游戏 </p>
	 * @param Long gamemeid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteGameMe(Long gamemeid) throws Exception {
		adminGameMapper.DeleteGameMe(gamemeid);
	}
	
}
