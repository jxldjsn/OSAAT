package org.cqut.wzy.osaat.controller.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jws.WebParam.Mode;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.entity.GameType;
import org.cqut.wzy.osaat.service.admin.AdminGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class GameManage {

	@Autowired
	private AdminGameService adminGameService;
	
	@RequestMapping("GameList")
	private ModelAndView GameList(@RequestParam("startPage") Long startPage) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllGame = adminGameService.CountAllGame();
		Double GamePage = Math.ceil(CountAllGame / (pageSize + 0.0));
		
		
		List<Game> games = new ArrayList<>();
		games = adminGameService.SearchAllGame(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("gamelist", games);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", GamePage);
		modelAndView.setViewName("OSAAT/admin/maingamelist");

		return modelAndView;
	}
	
	@RequestMapping("PreAddGame")
	private String PreAddGame(Model model) throws Exception {
		List<GameType> gameTypes = new ArrayList<>();
		gameTypes = adminGameService.SearchAllGameType();
		
		model.addAttribute("typelist", gameTypes);
		
		return "OSAAT/admin/maingameadd";
		
	}
	
	@RequestMapping("AddGame")
	private String AddGame(@RequestParam("type") Integer type, @RequestParam("gamename") String gamename, @RequestParam(value = "gamecover", required = false) MultipartFile gamecover, @RequestParam("gameurl") String gameurl,@RequestParam("gameintroduce") String gameintroduce, HttpServletRequest request, HttpSession session, Model model) throws Exception {
		
		// 用用户名和格式化时间作为文件名
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

		String ImgfileName;
		
		
		
		if (gamecover.isEmpty()) {
			ImgfileName = "";
		} else {
			try {
				// 获取游戏封面路径
				String indexpagePath = request.getSession().getServletContext().getRealPath("/OSAAT/games/minigames/gamescover");

				File targetfile = new File(indexpagePath);
				// 如果文件夹不存在就新建一个
				if (!targetfile.exists()) {
					targetfile.mkdir();
				}

				// 用用户名和格式化时间作为文件名
				String dateString = formatter.format(date);

				ImgfileName = gamecover.getOriginalFilename();

				// 获得用户上传图片的类型
				String phototype = ImgfileName.split("\\.")[1];
				if (!phototype.equals("jpg") && !phototype.equals("jpeg") && !phototype.equals("gif") && !phototype.equals("png")
						&& !phototype.equals("bmp") && !phototype.equals("JPG") && !phototype.equals("PNG") && !phototype.equals("GIF")) {
					model.addAttribute("gamecoverImageresult", "游戏封面上传失败,请确保您的图片类型是jpg、gif、png之一！");
					return "OSAAT/admin/maingameadd";
				}

				// 修改文件名
				ImgfileName = (String)session.getAttribute("adminusername") + ImgfileName.split("\\.")[0] +  dateString + "." + phototype;
				
				// 把用户上传的文件拷贝并保存到服务器的basic下的image文件夹下面
				try {
					gamecover.transferTo(new File(targetfile, ImgfileName));
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}

				model.addAttribute("gamecoverImageresult", "图片上传成功！");
				
			} catch (Exception e) {
				e.printStackTrace();
				model.addAttribute("gamecoverImageresult", "图片上传失败！");
				return "OSAAT/admin/maingameadd";
			}
		
		}
		
		Game game = new Game();
		game.setGameType(type);
		game.setGameName(gamename);
		if (!gamecover.isEmpty()) {
			game.setGameCoverUrl("/OSAAT/games/minigames/gamescover/" + ImgfileName);
		}
		game.setGameUrl(gameurl);
		game.setGameIntroduce(gameintroduce);
		game.setUploadTime(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		
		adminGameService.AddGame(game);
		
		model.addAttribute("Tips", "游戏已经成功添加！");
		
		return "redirect:/OSAAT/admin/GameList.action?startPage=1";
		
	}
	
	@RequestMapping("PreAlterGame")
	private String PreAlterGame(@RequestParam("gameid") Long gameid, Model model) throws Exception {

		Game game = new Game();
		
		game = adminGameService.SearchGameByID(gameid);
		
		List<GameType> gameTypes = new ArrayList<>();
		gameTypes = adminGameService.SearchAllGameType();
		
		model.addAttribute("game", game);
		model.addAttribute("gameTypes", gameTypes);
		
		return "OSAAT/admin/maingamealter";
		
	}
	
	
	@RequestMapping("AlterGame")
	private String AlterGame(@RequestParam("gameid") Long gameid, @RequestParam("type") Integer type, @RequestParam("gamename") String gamename, @RequestParam(value = "gamecover", required = false) MultipartFile gamecover, @RequestParam("gameurl") String gameurl,@RequestParam("gameintroduce") String gameintroduce, HttpServletRequest request, HttpSession session, Model model) throws Exception {
		
		// 用用户名和格式化时间作为文件名
				Date date = new Date();
				SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

				String ImgfileName;
				
				
				
				if (gamecover.isEmpty()) {
					ImgfileName = "";
				} else {
					try {
						// 获取游戏封面路径
						String indexpagePath = request.getSession().getServletContext().getRealPath("/OSAAT/games/minigames/gamescover");

						File targetfile = new File(indexpagePath);
						// 如果文件夹不存在就新建一个
						if (!targetfile.exists()) {
							targetfile.mkdir();
						}

						// 用用户名和格式化时间作为文件名
						String dateString = formatter.format(date);

						ImgfileName = gamecover.getOriginalFilename();

						// 获得用户上传图片的类型
						String phototype = ImgfileName.split("\\.")[1];
						if (!phototype.equals("jpg") && !phototype.equals("jpeg") && !phototype.equals("gif") && !phototype.equals("png")
								&& !phototype.equals("bmp") && !phototype.equals("JPG") && !phototype.equals("PNG") && !phototype.equals("GIF")) {
							model.addAttribute("gamecoverImageresult", "游戏封面上传失败,请确保您的图片类型是jpg、gif、png之一！");
							return "OSAAT/admin/maingameadd";
						}

						// 修改文件名
						ImgfileName = (String)session.getAttribute("adminusername") + ImgfileName.split("\\.")[0] +  dateString + "." + phototype;
						
						// 把用户上传的文件拷贝并保存到服务器的basic下的image文件夹下面
						try {
							gamecover.transferTo(new File(targetfile, ImgfileName));
						} catch (Exception e) {
							// TODO: handle exception
							e.printStackTrace();
						}

						model.addAttribute("gamecoverImageresult", "图片上传成功！");
						
					} catch (Exception e) {
						e.printStackTrace();
						model.addAttribute("gamecoverImageresult", "图片上传失败！");
						return "OSAAT/admin/maingameadd";
					}
				
				}
		
		Game game = new Game();
		game.setGameId(gameid);
		game.setGameType(type);
		game.setGameName(gamename);
		if (!gamecover.isEmpty()) {
			game.setGameCoverUrl("/OSAAT/games/minigames/gamescover/" + ImgfileName);
		}
		game.setGameUrl(gameurl);
		game.setGameIntroduce(gameintroduce);
		
		adminGameService.UpdateGame(game);
		
		model.addAttribute("Tips", "游戏已经成功修改！");
		
		return "redirect:/OSAAT/admin/GameList.action?startPage=1";
		
	}
	
	@RequestMapping("DeleteGame")
	private String DeleteGame(@RequestParam("gameid") Long gameid, Model model) throws Exception {

		adminGameService.DeleteGame(gameid);
		model.addAttribute("Tips", "游戏已经成功删除！");
		return "redirect:/OSAAT/admin/GameList.action?startPage=1";

	}
	
	@RequestMapping("SearchGameByName")
	private ModelAndView SearchGameByName(@RequestParam("key") String key, @RequestParam("startPage") Long startPage, Model model) throws Exception {

		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountSearchGame = adminGameService.CountSearchGame(key);
		Double totalPage = Math.ceil(CountSearchGame / (pageSize + 0.0));
		
		
		List<Game> games = new ArrayList<>();
		games = adminGameService.SearchGameByName(key, startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("gamelist", games);
		modelAndView.addObject("key", key);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", totalPage);
		modelAndView.setViewName("OSAAT/admin/maingamesearchlist");

		return modelAndView;

	}
	
	@RequestMapping("GameTypeList")
	private ModelAndView GameTypeList() throws Exception {
		
		
		
		List<GameType> gameTypes = new ArrayList<>();
		gameTypes = adminGameService.SearchAllGameType();

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("gametypelist", gameTypes);

		modelAndView.setViewName("OSAAT/admin/maingametypelist");

		return modelAndView;
	}
	
	@RequestMapping("AddGameType")
	private String AddGameType(@RequestParam("typename") String typename, Model model) throws Exception {
		GameType gameType = new GameType();
		gameType.setTypeName(typename);
		
		adminGameService.AddGameType(gameType);
		
		model.addAttribute("Tips", "您已经成功的添加游戏的类型！");
		
		return "redirect:/OSAAT/admin/GameTypeList.action";
		
	}
	
	@RequestMapping("PreAlterGameType")
	private String PreAlterGameType(@RequestParam("typeid") Integer typeid, @RequestParam("typename") String typename, Model model) throws Exception {
		
		model.addAttribute("typeid", typeid);
		model.addAttribute("typename", typename);
		
		return "OSAAT/admin/maingametypealter";	
	}
	
	@RequestMapping("AlterGameType")
	private String AlterGameType(@RequestParam("typeid") Integer typeid, @RequestParam("typename") String typename, Model model) throws Exception {
		GameType gameType = new GameType();
		gameType.setTypeId(typeid);
		gameType.setTypeName(typename);
		
		adminGameService.UpdateGameType(gameType);
		
		model.addAttribute("Tips", "游戏的类型已经成功的添加！");
		
		return "redirect:/OSAAT/admin/GameTypeList.action";
		
	}
	
	@RequestMapping("UserGameList") 
	private ModelAndView UserGameList(@RequestParam("startPage") Long startPage, Model model) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountGameMe = adminGameService.CountAllGameMe();
		Double totalPage = Math.ceil(CountGameMe / (pageSize + 0.0));
		
		
		List<GameMe> gameMes = new ArrayList<>();
		gameMes = adminGameService.UserGameList(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("gamemelist", gameMes);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", totalPage);
		modelAndView.setViewName("OSAAT/admin/maingamemelist");

		return modelAndView;
	}
	
	@RequestMapping("DeleteGameMe")
	private String DeleteGameMe(@RequestParam("gameMeid") Long gameMeid, Model model) throws Exception {
		adminGameService.DeleteGameMe(gameMeid);
		model.addAttribute("Tips", "已经成功删除！");
		return "redirect:/OSAAT/admin/UserGameList.action?startPage=1";
		
	}
	
}
