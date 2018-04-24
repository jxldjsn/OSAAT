package org.cqut.wzy.osaat.controller.blog;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.view.BlogCommentView;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/blog/")
public class BlogDetail {

	@Autowired
	private BlogService blogService;

	@RequestMapping("BlogDetail")
	private ModelAndView Blogdetail(@RequestParam("blogId") Long blogId, ModelAndView modelAndView) throws Exception {
		Blog blog = new Blog();
		List<BlogCommentView> blogCommentList = new ArrayList<BlogCommentView>();
		BlogType blogType = new BlogType();
		blog = blogService.SelectBlogById(blogId);
		String authorName = blogService.SelectUserNameById(blog.getBlogAuthorid());
		blogType = blogService.SelectBlogTypeById(blog.getBlogType());
		blogCommentList = blogService.SelectBlogCommentViewByBlogId(blogId);
		
		modelAndView.addObject("authorName", authorName);
		modelAndView.addObject("blogTypeName", blogType.getBlogTypeName());
		modelAndView.addObject("blog", blog);
		modelAndView.addObject("blogCommentList", blogCommentList);
		modelAndView.setViewName("OSAAT/blog/blogdetail");
		return modelAndView;

	}
	
	
	@RequestMapping("PraiseBlog")
	private String PriseTheBlog(@RequestParam("blogId") Long blogId, Model model) throws Exception {

		blogService.PriseBlog(blogId);

		model.addAttribute("blogId", blogId);

		return "redirect:/OSAAT/blog/BlogDetail.action";

	}
	
	
	@RequestMapping("AddComment")
	public String InsertComment(@RequestParam("blogId") Long blogId,
			@RequestParam("addCommentContent") String addCommentContent, HttpSession session, Model model) throws Exception {
		// 获得系统时间
		java.util.Date date = new java.util.Date();

		Long id = (Long) session.getAttribute("id");
		BlogComment blogComment = new BlogComment();
		blogComment.setCommentBlogId(blogId);
		blogComment.setCommentBlogUser(id);
		blogComment.setCommentContent(addCommentContent);
		blogComment.setCommentTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));

		blogService.InserBlogComment(blogComment);

		model.addAttribute("blogId", blogId);

		return "redirect:/OSAAT/blog/BlogDetail.action";

	}

}
