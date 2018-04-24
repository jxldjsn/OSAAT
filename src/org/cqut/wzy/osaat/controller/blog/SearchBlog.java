package org.cqut.wzy.osaat.controller.blog;

import java.util.List;

import org.cqut.wzy.osaat.entity.view.IndexBlogView;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/blog/")
public class SearchBlog {

	@Autowired
	private BlogService blogService;
	
	@RequestMapping("SearchBlogByTitle")
	private ModelAndView SearchByBlogTitle(@RequestParam("blogkey") String blogkey, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;
		
		Long titleCountBlog = blogService.CountBlogByTitleKey(blogkey);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		
		List<IndexBlogView> BlogList = blogService.SelectByBlogTitle(blogkey, startPage * pageSize, pageSize);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("BlogList", BlogList);
		
		modelAndView.addObject("blogkey", blogkey);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/blog/searchresult");
		
//		System.out.println("$$$$$$$$" + titleCountBlog +"$$$$$$$$$$$$$$" + CountBlog + "%%%" + startPage);
		return modelAndView;
			
	}
	
	
	@RequestMapping("SelectBlogByType")
	private ModelAndView SelectBlogByType(@RequestParam("blogTypeid") Integer blogTypeid, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 10;
		
		Long titleCountBlog = blogService.CountBlogByType(blogTypeid);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		List<IndexBlogView> BlogList = blogService.SelectBlogByType(blogTypeid, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("BlogList", BlogList);
		
		modelAndView.addObject("blogTypeid", blogTypeid);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/blog/searchbytyperesult");
		return modelAndView;
			
	}
	
}
