package org.cqut.wzy.osaat.controller.game;

import java.util.List;

import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/games/")
public class SerchGameByName {

	@Autowired
	private GameService gameService;

	@RequestMapping("SerchGameByName")
	private ModelAndView SerchGamesByName(@RequestParam("gamekey") String gamekey, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		long pageSize = 20;
		// 选择WZY游戏
		
		Long titleCountBlog = gameService.CountSearchGameByName(gamekey);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		List<Game> GameList = gameService.SearchGameByName(gamekey, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("GameList", GameList);
		
		modelAndView.addObject("gamekey", gamekey);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/games/searchresult");
		return modelAndView;

	}

}
