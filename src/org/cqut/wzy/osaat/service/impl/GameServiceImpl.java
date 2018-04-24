package org.cqut.wzy.osaat.service.impl;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.mapper.BasicGameMapper;
import org.cqut.wzy.osaat.mapper.GameMapper;
import org.cqut.wzy.osaat.mapper.GameMeMapper;
import org.cqut.wzy.osaat.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;

public class GameServiceImpl implements GameService {
	
	@Autowired
	private BasicGameMapper basicGameMapper;
	
	@Autowired
	private GameMapper gameMapper;
	
	@Autowired
	private GameMeMapper gameMeMapper;
	
	/**
	 * <p>Title: CountAllGame</p>
	 * <p>Description:统计游戏的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllGame() throws Exception {
		return basicGameMapper.CountAllGame();
	}

	/**
	 * <p>Title: SelectAllGame</p>
	 * <p>Description:获取所有的游戏 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SelectAllGame(Long startPage, Long pageSize) throws Exception {
		// TODO Auto-generated method stub
		return basicGameMapper.SearchAllGame(startPage, pageSize);
	}

	/**
	 * <p>Title: AddGame</p>
	 * <p>Description:添加游戏 </p>
	 * @param game
	 * @return 
	 * @throws Exception
	 */
	public void AddGame(Game game) throws Exception {
		// TODO Auto-generated method stub
		gameMapper.insert(game);
	}

	
	/**
	 * <p>Title: AddToMyGame</p>
	 * <p>Description:把用户喜欢的游戏添加到用户列表里面 </p>
	 * @param String name
	 * @return List<Game>
	 * @throws Exception
	 */
	public void AddToMyGame(GameMe nameMe) throws Exception {
		gameMeMapper.insertSelective(nameMe);
	}
	
	/**
	 * <p>Title: CountSearchGameByName</p>
	 * <p>Description:统计用户搜索游戏的个数 </p>
	 * @param String gamekey
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchGameByName(String gamekey) throws Exception {
		return basicGameMapper.CountSearchGameByName(gamekey);
	}
	
	/**
	 * <p>Title: SearchGameByName</p>
	 * <p>Description:用户搜索游戏 </p>
	 * @param String gamekey
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByName(String gamekey, Long startPage, Long pageSize) throws Exception {
		return basicGameMapper.SearchGameByName(gamekey, startPage, pageSize);
	}

	/**
	 * <p>Title: SelectByUserAndGame</p>
	 * <p>Description:判断用户是否已经把游戏添加自己的游戏列表里面了 </p>
	 * @param Long userId
	 * @param Long gameid
	 * @return Long
	 * @throws Exception
	 */
	public Long SelectByUserAndGame(Long userId, Long gameid) {
		return basicGameMapper.SelectByUserAndGame(userId, gameid);
	}
	
	/**
	 * <p>Title: CountAllUserGame</p>
	 * <p>Description:统计用户的游戏个数 </p>
	 * @param Long userId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllUserGame(Long userId) throws Exception {
		return basicGameMapper.CountAllUserGame(userId);
	}
	
	/**
	 * <p>Title: SearchGameByUserId</p>
	 * <p>Description:根据用户ID搜索游戏 </p>
	 * @param Long userId
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Game>
	 * @throws Exception
	 */
	public List<Game> SearchGameByUserId(Long userId, Long startPage, Long pageSize) throws Exception {
		return basicGameMapper.SearchGameByUserId(userId, startPage, pageSize);
	}
	
	/**
	 * <p>Title: DeleteMyGame</p>
	 * <p>Description:根据用户游戏ID删除关联</p>
	 * @param Long gamemeId
	 * @return void
	 * @throws Exception
	 */
	public void DeleteMyGame(Long userId, Long gamemeId) throws Exception {
		basicGameMapper.DeleteMyGame(userId, gamemeId);
	}
}
