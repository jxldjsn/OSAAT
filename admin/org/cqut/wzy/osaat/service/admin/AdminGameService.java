package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.entity.GameType;
import org.cqut.wzy.osaat.entity.Invitation;

/**
 * 
 * <p>Title: AdminGameService</p>
 * <p>Description:管理员管理游戏的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-27下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-27<br/>
 * 历史修订：<br/>
 */
public interface AdminGameService {
	
	/**
	 * <p>Title: CountAllGame</p>
	 * <p>Description:统计所有游戏的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGame() throws Exception;
	
	/**
	 * <p>Title: SearchAllGame</p>
	 * <p>Description:获取所有的游戏 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchAllGame(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: SearchAllGameType</p>
	 * <p>Description:获取所有的游戏类型 </p>
	 * @param 
	 * @return List<GameType>
	 * @throws Exception
	 */
	public List<GameType> SearchAllGameType() throws Exception;
	
	/**
	 * <p>Title: AddGame</p>
	 * <p>Description:添加游戏 </p>
	 * @param Game game
	 * @return 
	 * @throws Exception
	 */
	public void AddGame(Game game) throws Exception;
	
	/**
	 * <p>Title: UpdateGame</p>
	 * <p>Description:更新游戏 </p>
	 * @param Game game
	 * @return 
	 * @throws Exception
	 */
	public void UpdateGame(Game game) throws Exception;
	
	/**
	 * <p>Title: DeleteGame</p>
	 * <p>Description:删除游戏 </p>
	 * @param Long gameid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteGame(Long gameid) throws Exception;
	
	/**
	 * <p>Title: SearchGameByID</p>
	 * <p>Description:根据Id查询游戏 </p>
	 * @param Long gameid
	 * @return Game
	 * @throws Exception
	 */
	public Game SearchGameByID(Long gameid) throws Exception;
	
	/**
	 * <p>Title: CountSearchGame</p>
	 * <p>Description:根据游戏关键字统计游戏数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchGame(String key) throws Exception;
	
	/**
	 * <p>Title: SearchGameByName</p>
	 * <p>Description:根据游戏关键字搜索游戏 </p>
	 * @param String key
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByName(String key, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: AddGameType</p>
	 * <p>Description:添加游戏类型 </p>
	 * @param GameType gameType
	 * @return 
	 * @throws Exception
	 */
	public void AddGameType(GameType gameType) throws Exception;
	
	/**
	 * <p>Title: UpdateGameType</p>
	 * <p>Description:更新游戏类型 </p>
	 * @param GameType gameType
	 * @return 
	 * @throws Exception
	 */
	public void UpdateGameType(GameType gameType) throws Exception;
	
	/**
	 * <p>Title: CountAllGameMe</p>
	 * <p>Description:获取所有的用户游戏数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGameMe() throws Exception;
	
	/**
	 * <p>Title: UserGameList</p>
	 * <p>Description:获取所有用户的游戏 </p>
	 * @param 
	 * @return  List<GameMe> 
	 * @throws Exception
	 */
	public List<GameMe> UserGameList(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteGameMe</p>
	 * <p>Description:删除用户的游戏 </p>
	 * @param Long gamemeid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteGameMe(Long gamemeid) throws Exception;
	
}
