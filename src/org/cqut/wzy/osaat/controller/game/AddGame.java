package org.cqut.wzy.osaat.controller.game;

import java.text.SimpleDateFormat;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/games/")
public class AddGame {
	
	@Autowired
	private GameService gameService;

	@RequestMapping("AddGame")
	private String AddNewGame(@RequestParam("gameName") String gameName, @RequestParam("gameUrl") String gameUrl,  @RequestParam("gameCoverUrl") String gameCoverUrl, Model model) throws Exception {
		
		//通过Session获得用户类型，只有管理员才能添加
		
		// 实例化一个游戏对象
		Game game = new Game();
		// 获得系统时间
		java.util.Date date = new java.util.Date();
		
		// 为游戏设置相关的值
		game.setGameName(gameName);
		game.setGameUrl(gameUrl);
		game.setGameCoverUrl(gameCoverUrl);
		game.setUploadTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		
		gameService.AddGame(game);
		
		model.addAttribute("result", "添加游戏成功！");
		
		return "OSAAT/games/savegame";
	}
	
}
