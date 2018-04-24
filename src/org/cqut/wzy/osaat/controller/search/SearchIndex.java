package org.cqut.wzy.osaat.controller.search;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/search/")
public class SearchIndex {
	
	@RequestMapping("SearchIndex")
	private String SearchByInvitationName(@RequestParam("searchselecttype") String searchselecttype, @RequestParam("keyboard") String keyboard, Model model) throws Exception {
		
		if(searchselecttype.equals("博客")) {
			model.addAttribute("blogkey", keyboard);
			model.addAttribute("startPage", 1);
			return "redirect:/OSAAT/blog/SearchBlogByTitle.action";
		} else if(searchselecttype.equals("论坛")) {
			model.addAttribute("invitationkey", keyboard);
			model.addAttribute("startPage", 1);
			return "redirect:/OSAAT/bbs/SearchInvitation.action";
		} else {
			//选择游戏
			model.addAttribute("gamekey", keyboard);
			model.addAttribute("startPage", 1);
			return "redirect:/OSAAT/games/SerchGameByName.action";
		}
	}
	
}
