package org.cqut.wzy.osaat.service;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;

/**
 * <p>Title: GameService</p>
 * <p>Description:游戏基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2016-7-6下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2016-7-1<br/>
 * 历史修订：<br/>
 */
public interface GameService {

	
	/**
	 * <p>Title: CountAllGame</p>
	 * <p>Description:统计游戏的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGame() throws Exception;
	
	/**
	 * <p>Title: SelectAllGame</p>
	 * <p>Description:获取所有的游戏 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SelectAllGame(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: AddGame</p>
	 * <p>Description:添加游戏 </p>
	 * @param game
	 * @return 
	 * @throws Exception
	 */
	public void AddGame(Game game) throws Exception;
	
	/**
	 * <p>Title: AddToMyGame</p>
	 * <p>Description:把用户喜欢的游戏添加到用户列表里面 </p>
	 * @param String name
	 * @return List<Game>
	 * @throws Exception
	 */
	public void AddToMyGame(GameMe nameMe) throws Exception;
	
	/**
	 * <p>Title: CountSearchGameByName</p>
	 * <p>Description:统计用户搜索游戏的个数 </p>
	 * @param String gamekey
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchGameByName(String gamekey) throws Exception;
	
	/**
	 * <p>Title: SearchGameByName</p>
	 * <p>Description:根据用户的关键字搜索游戏 </p>
	 * @param String gamekey
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByName(String gamekey, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: SelectByUserAndGame</p>
	 * <p>Description:判断用户是否已经把游戏添加自己的游戏列表里面了 </p>
	 * @param Long userId
	 * @param Long gameid
	 * @return Long
	 * @throws Exception
	 */
	public Long SelectByUserAndGame(Long userId, Long gameid);
	
	/**
	 * <p>Title: CountAllUserGame</p>
	 * <p>Description:统计用户的游戏个数 </p>
	 * @param Long userId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllUserGame(Long userId) throws Exception;
	
	/**
	 * <p>Title: SearchGameByUserId</p>
	 * <p>Description:根据用户ID搜索游戏 </p>
	 * @param Long userId
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByUserId(Long userId, Long startPage, Long pageSize) throws Exception;

	/**
	 * <p>Title: DeleteMyGame</p>
	 * <p>Description:根据用户游戏ID删除关联</p>
	 * @param Long gamemeId
	 * @return void
	 * @throws Exception
	 */
	public void DeleteMyGame(Long userId, Long gamemeId) throws Exception;
}
