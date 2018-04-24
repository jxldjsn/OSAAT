package org.cqut.wzy.osaat.controller.admin;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jws.WebParam.Mode;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.admin.News;
import org.cqut.wzy.osaat.service.admin.AdminNewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class NewsManage {

	@Autowired
	private AdminNewsService adminNewsService;
	
	@RequestMapping("NewsList")
	private ModelAndView NewsList(@RequestParam("startPage") Long startPage) throws Exception {

		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;

		Long CountAllNews = adminNewsService.CountAllNews();
		Double pagecount = Math.ceil(CountAllNews / (pageSize + 0.0));

		List<News> newslist = new ArrayList<>();
		newslist = adminNewsService.SearchAllNews(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("newslist", newslist);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", pagecount);
		modelAndView.setViewName("OSAAT/admin/mainnewslist");

		return modelAndView;
	}
	
	@RequestMapping("AddNews")
	private String AddNews(@RequestParam("newstitle") String newstitle, @RequestParam("author") String author, @RequestParam("newsabstract") String newsabstract, @RequestParam("newscontent") String newscontent, Model model) throws Exception {
		
		News news = new News();
		news.setTitle(newstitle);
		news.setAuthor(author);
		news.setNewsAbstract(newsabstract);
		news.setContent(newscontent);
		news.setTime((new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")).format(new Date()));
		
		model.addAttribute("tips", "资讯已经成功添加！");
		
		adminNewsService.AddNews(news);
		
		return "redirect:/OSAAT/admin/NewsList.action?startPage=1";
	}
	
	@RequestMapping("PreAlterNews")
	private String PreAlterNews(@RequestParam("id") Long id, Model model) throws Exception {
		
		News news = new News();
		news = adminNewsService.SearchNewsById(id);
		
		model.addAttribute("news", news);
		
		
		return "OSAAT/admin/mainnewsalter";
		
	}
	
	@RequestMapping("AlterNews")
	private String AlterNews(@RequestParam("id") Long id, @RequestParam("newstitle") String newstitle, @RequestParam("author") String author, @RequestParam("newsabstract") String newsabstract, @RequestParam("newscontent") String newscontent, Model model) throws Exception {
		
		News news = new News();
		
		news.setId(id);
		news.setTitle(newstitle);
		news.setAuthor(author);
		news.setNewsAbstract(newsabstract);
		news.setContent(newscontent);
		
		adminNewsService.AlterNews(news);
		
		model.addAttribute("tips", "咨询已经成功修改！");
		
		return "redirect:/OSAAT/admin/NewsList.action?startPage=1";
	}
	
	@RequestMapping("DeleteNews")
	private String DeleteNews(@RequestParam("id") Long id, Model model) throws Exception {
		
		adminNewsService.DeleteNews(id);
		
		model.addAttribute("tips", "已经成功删除！");
		
		return "redirect:/OSAAT/admin/NewsList.action?startPage=1";
		
	}
	
	@RequestMapping("SearchNewsByKey")
	private ModelAndView SearchNewsByKey(@RequestParam("startPage") Long startPage, @RequestParam("key") String key) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountSearchNews = adminNewsService.CountSearchNews(key);
		Double pagecount = Math.ceil(CountSearchNews / (pageSize + 0.0));
		
		
		List<News> newslist = new ArrayList<>();
		newslist = adminNewsService.SearchNewsByKey(key, startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("newslist", newslist);
		modelAndView.addObject("key", key);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", pagecount);
		modelAndView.setViewName("OSAAT/admin/mainnewssearchlist");

		return modelAndView;
	}
	
}
