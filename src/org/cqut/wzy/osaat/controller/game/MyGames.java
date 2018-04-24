package org.cqut.wzy.osaat.controller.game;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/games/")
public class MyGames {

	@Autowired
	private GameService gameService;
	
	
	@RequestMapping("MyGames")
	private ModelAndView GetMyGames(@RequestParam("startPage") Long startPage, HttpSession session) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 12;
		
		Long id = (Long) session.getAttribute("id");
		
		Long CountMyGame = gameService.CountAllUserGame(id);
		double CountGame = Math.ceil(CountMyGame / (pageSize + 0.0));
		
		ModelAndView modelAndView = new ModelAndView();
		
		List<Game> gamelist = new ArrayList<Game>();
		gamelist = gameService.SearchGameByUserId(id, startPage * pageSize, pageSize);

		modelAndView.addObject("gamelist", gamelist);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountGame);
		modelAndView.setViewName("OSAAT/games/mygame");

		return modelAndView;
		
	}
	
	@RequestMapping("DeleteMyGames")
	private String GetMyGames(@RequestParam("gameId") Long gameId, HttpSession session, Model model) throws Exception {
		
		Long userId = (Long) session.getAttribute("id");
		
		gameService.DeleteMyGame(userId, gameId);
		model.addAttribute("tips", "您好，您的游戏已经成功删除!");
		return "redirect:/OSAAT/games/MyGames.action?startPage=1";
	}
}
