package org.cqut.wzy.osaat.controller.blog;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/blog/")
public class MyBlog {

	@Autowired
	private BlogService blogService;

	@RequestMapping("MyBlog")
	private ModelAndView SearchMyBlog(@RequestParam("startPage") Long startPage, HttpSession session) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 5;
		
		
		Long id = (Long) session.getAttribute("id");
	
		Long titleCountBlog = blogService.CountBlogByUserId(id);
		double CountBlog = Math.ceil(titleCountBlog / (pageSize + 0.0));
		System.out.println("$$$$$$$$$$$$$$$$$$$$$$" + titleCountBlog);
		
		List<Blog> bloglist = new ArrayList<Blog>();
		bloglist = blogService.SearchBlogByUserId(id, startPage * pageSize, pageSize);


		ModelAndView modelAndView = new ModelAndView();

		modelAndView.addObject("bloglist", bloglist);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/blog/myblog");
		
		return modelAndView;
	}
	
	@RequestMapping("MyBlogDelete")
	private String DeleteMyBlog(@RequestParam("blogId") Long blogId, HttpSession session, Model model)
			throws Exception {
		Blog blog = blogService.SelectBlogById(blogId);
		Long id = (Long) session.getAttribute("id");
		if (!blog.getBlogAuthorid().equals(id)) {
			model.addAttribute("warn", "对不起，您只能删除您自己的博客！");
		} else {
			blogService.DeleteBlogById(blogId);
			model.addAttribute("warn", "博客已经成功删除！");
		}
		
		return "redirect:/OSAAT/blog/MyBlog.action?startPage=1";
	}
	
	@RequestMapping("PreMyBlogAlter")
	private String PreMyBlogAlter(@RequestParam("blogId") Long blogId, Model model, HttpSession session)
			throws Exception {
		Blog blog = blogService.SelectBlogById(blogId);
		Long id = (Long) session.getAttribute("id");
		if (!blog.getBlogAuthorid().equals(id)) {
			model.addAttribute("warn", "对不起，您只能修改自己的博客！");
			return "OSAAT/blog/myblog";
		} else {
			model.addAttribute("blog", blog);
			return "OSAAT/blog/alterblog";
		}
	}

	@RequestMapping("MyBlogAlter")
	private String AlterMyBlog(@RequestParam("blogId") Long blogId, @RequestParam("blogAuthorId") Long blogAuthorId,
			@RequestParam("blogTitle") String blogTitle, @RequestParam("bolgContent") String bolgContent, @RequestParam("blogabstract") String blogabstract,
			HttpSession session, Model model) throws Exception {
		Long id = (Long) session.getAttribute("id");
		if (!blogAuthorId.equals(id)) {
			model.addAttribute("warn", "对不起，您只能修改你自己的博客！");
			model.addAttribute("blogId", blogId);
			return "redirect:/OSAAT/blog/PreMyBlogAlter.action";
		} else {
			// 获得系统时间
			Blog blog = new Blog();
			blog.setBlogId(blogId);
			blog.setBlogTitle(blogTitle);
			blog.setBlogContent(bolgContent);
			blog.setBlogAbstract(blogabstract);
			blogService.UpdateBlog(blog);
			model.addAttribute("blogId", blog.getBlogId());
			return "redirect:/OSAAT/blog/BlogDetail.action";
		}
	}

}
