package org.cqut.wzy.osaat.controller.basic;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/basic/")
public class IndexAction {
	
	@Autowired
	private BasicService basicService;
	
	@RequestMapping("IndexAction")
	private ModelAndView Index() throws Exception {
	
		/**
		 * 为了简便业务流程，我把Type用int类型来表示：
		 * 1表示新闻资讯；
		 * 2表示博客；
		 * 3表示论坛；
		 * 4表示音乐；
		 * 5表示游戏等。
		 * 后面会陆续加入其他模块。
		 * size是根据主页的显示情况来进行的分配的。
		 * 
		 * */
		
		List<Indexpage> newsList = new ArrayList<Indexpage>();
		List<Indexpage> blogList = new ArrayList<Indexpage>();
		List<Indexpage> bbsList = new ArrayList<Indexpage>();
		List<Indexpage> gameList = new ArrayList<Indexpage>();
		
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		
		newsList = basicService.SearchByTypeSize(1, 5);
		
		blogList = basicService.SearchByTypeSize(2, 5);
		
		bbsList = basicService.SearchByTypeSize(3, 5);
		
		gameList = basicService.SearchByTypeSize(5, 20);
		
		
		for(int i = 0; i < newsList.size(); i++) {
			System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%abstract=" + newsList.get(i).getIndexAbstract());
		}
		
		System.out.println("########################");
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.addObject("newsList", newsList);
		modelAndView.addObject("blogList", blogList);
		modelAndView.addObject("bbsList", bbsList);
		modelAndView.addObject("gameList", gameList);
		modelAndView.setViewName("OSAAT/basic/index");
		
		
		
		return modelAndView;
		
	}
}
