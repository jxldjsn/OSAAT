package org.cqut.wzy.osaat.controller.blog;

import java.text.SimpleDateFormat;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.BasicService;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/blog/")
public class AddBlog {

	@Autowired
	private BlogService blogService;
	
	@Autowired
	private BasicService basicService;
	
	@RequestMapping("PreAddBlog")
	private ModelAndView BeforeAddBlog() throws Exception {
		ModelAndView modelAndView = new ModelAndView();

		modelAndView.addObject("blogtypelist", blogService.SelectAllBlogType());
		modelAndView.setViewName("OSAAT/blog/addblog");
		return modelAndView;
	}
	
	@RequestMapping("AddBlogReturn")
	private ModelAndView AddBlogreturn(@RequestParam("message") String message) throws Exception {
		ModelAndView modelAndView = new ModelAndView();

		modelAndView.addObject("blogtypelist", blogService.SelectAllBlogType());
		modelAndView.addObject("message", "博客发表成功！");
		modelAndView.setViewName("OSAAT/blog/addblog");
		return modelAndView;
	}

	@RequestMapping("AddBlog")
	private String AddUserBlog(@RequestParam("blogTitle") String blogTitle, @RequestParam("blogAbstract") String blogAbstract,
			@RequestParam("blogContent") String blogContent, @RequestParam("type") String type, HttpSession session,
			Model model) throws Exception {
		// 获得系统时间
		java.util.Date date = new java.util.Date();

		// 通过session得到当前用户的id
		Long userId = (Long) session.getAttribute("id");
		Integer integral = (Integer) session.getAttribute("integral");
		//发表一个博客加十个积分
		User user = new User();
		user.setId(userId);
		user.setIntegral(integral + 10);
		basicService.UpdateUserInfo(user);
		session.setAttribute("integral", integral + 10);
		
		// 实例化一个博客对象
		Blog blog = new Blog();
		blog.setBlogAuthorid(userId);
		blog.setBlogDate(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		blog.setBlogType(Integer.parseInt(type));
		blog.setBlogTitle(blogTitle);
		blog.setBlogContent(blogContent);
		blog.setBlogAbstract(blogAbstract);
		blog.setBlogPraise(0);
		blog.setBlogBrowse(0.0);
		
		blogService.AddBlog(blog);
		
		model.addAttribute("message", "博客发表成功！");
		return "redirect:/OSAAT/blog/AddBlogReturn.action";

	}

}
