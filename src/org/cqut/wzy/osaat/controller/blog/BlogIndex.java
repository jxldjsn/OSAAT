package org.cqut.wzy.osaat.controller.blog;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.view.IndexBlogBroadsideView;
import org.cqut.wzy.osaat.entity.view.IndexBlogView;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/blog/")
public class BlogIndex {
	
	@Autowired
	private BlogService blogService;
	
	@RequestMapping("BlogIndex")
	private ModelAndView  BlogIndexAction(@RequestParam("startPage") Long startPage) throws Exception {
		
		//System.out.println("startpage @@@@@@@@@@@@@@=" + startPage);
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		int num = 10;
		long pageSize = 20;
		
	
		Long titleCountBlog = blogService.CountBlog();
		Double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		
		
		//存取博客列表
		List<IndexBlogView> bloglist = new ArrayList<IndexBlogView>();
		
		//存取最新博客
		List<IndexBlogBroadsideView> newestblogList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取浏览量最多的博客
		List<IndexBlogBroadsideView> hotbrowseblogList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取点赞量最多的博客
		List<IndexBlogBroadsideView> hotpraiseblogList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取所有的博客类型
		List<BlogType> allblogtypeList = new ArrayList<BlogType>();
		
		
		//获取几个比较有代表性的运动类型进行展示 type暂时写死了
		//存取游泳类型的博客 6个 type=1 
		List<IndexBlogBroadsideView> blogSwingList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取徒步类型的博客 6个  type=4
		List<IndexBlogBroadsideView> blogWorkingList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取登山类型的博客 6个   type=6
		List<IndexBlogBroadsideView> blogMountainClimbingList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取球类类型的博客 6个   type=16
		List<IndexBlogBroadsideView> blogBallList = new ArrayList<IndexBlogBroadsideView>();
		
		//存取休闲娱乐类型的博客 6个   type=18
		List<IndexBlogBroadsideView> blogEntertainmentList = new ArrayList<IndexBlogBroadsideView>();
		
		
		bloglist = blogService.SearchAllBlog(startPage * pageSize, pageSize);
		
		newestblogList = blogService.SearchNumNewBlog(num);
		hotbrowseblogList = blogService.SearchNumHotBrowseBlog(num);
		hotpraiseblogList = blogService.SearchNumHotPraiseBlog(num);
		
		allblogtypeList = blogService.SelectAllBlogType();
		
		int blogBroadsideNum = 6;
		blogSwingList = blogService.SerachNumTypeBlog(1, blogBroadsideNum);
		blogWorkingList = blogService.SerachNumTypeBlog(4, blogBroadsideNum);
		blogMountainClimbingList = blogService.SerachNumTypeBlog(6, blogBroadsideNum);
		blogBallList = blogService.SerachNumTypeBlog(16, blogBroadsideNum);
		blogEntertainmentList = blogService.SerachNumTypeBlog(18, blogBroadsideNum);
		
		
		ModelAndView modelAndView = new ModelAndView();
		
		modelAndView.addObject("bloglist", bloglist);
		
		modelAndView.addObject("newestblogList", newestblogList);
		modelAndView.addObject("hotbrowseblogList", hotbrowseblogList);
		modelAndView.addObject("hotpraiseblogList", hotpraiseblogList);
		
		modelAndView.addObject("allblogtypeList", allblogtypeList);
		
		modelAndView.addObject("blogSwingList", blogSwingList);
		modelAndView.addObject("blogWorkingList", blogWorkingList);
		modelAndView.addObject("blogMountainClimbingList", blogMountainClimbingList);
		modelAndView.addObject("blogBallList", blogBallList);
		modelAndView.addObject("blogEntertainmentList", blogEntertainmentList);
		
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/blog/blogindex");
		
		return modelAndView;
		
	}

}
