package org.cqut.wzy.osaat.controller.game;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/games/")
public class AllGames {

	@Autowired
	private GameService gameService;

	@RequestMapping("AllGames")
	private ModelAndView GetAllGames(@RequestParam("startPage") Long startPage) throws Exception {

		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		long pageSize = 20;
		
		Long titleCountBlog = gameService.CountAllGame();
		Double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		ModelAndView modelAndView = new ModelAndView();

		List<Game> gamelist = new ArrayList<Game>();
		gamelist = gameService.SelectAllGame(startPage * pageSize, pageSize);
		
		modelAndView.addObject("gamelist", gamelist);
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/games/index");
		return modelAndView;

	}
	
	@RequestMapping("AddToMyGames")
	private String AddToMyGames(Model model, HttpSession session, @RequestParam("gameId") Long gameId) throws Exception {
		
		Long id = (Long) session.getAttribute("id");
		
		Long gameMeId = gameService.SelectByUserAndGame(id, gameId);
		
		if (gameMeId == null) {
			GameMe gameme = new GameMe();
			gameme.setGameMeGameid(gameId);
			gameme.setGameMeUserid(id);
			gameService.AddToMyGame(gameme);
			model.addAttribute("tips", "游戏已经成功添加！");
		} else {
			model.addAttribute("tips", "游戏已经添加,无需重复添加！");
		}
		
		
		
		return "redirect:/OSAAT/games/AllGames.action?startPage=1";
		
	}
}
