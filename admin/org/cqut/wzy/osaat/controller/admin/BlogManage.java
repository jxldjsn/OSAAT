package org.cqut.wzy.osaat.controller.admin;

import java.util.ArrayList;
import java.util.List;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.service.admin.AdminBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class BlogManage {

	@Autowired
	private AdminBlogService adminBlogService;
	
	@RequestMapping("BlogList")
	private ModelAndView BlogList(@RequestParam("startPage") Long startPage) throws Exception {
		
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllBlog = adminBlogService.CountAllBlog();
		Double CountBlog = Math.ceil(CountAllBlog / (pageSize + 0.0));
		
		
		List<Blog> blogs = new ArrayList<>();
		blogs = adminBlogService.SearchAllBlog(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("bloglist", blogs);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountBlog);
		modelAndView.setViewName("OSAAT/admin/mainbloglist");

		return modelAndView;
		
	}
	
	@RequestMapping("SearchBlogByTitle")
	private ModelAndView SearchBlogByTitle(@RequestParam("startPage") Long startPage, @RequestParam("title") String title) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountSearchBlog = adminBlogService.ConntSearchBlogByTitle(title);
		Double SearchBlogPage = Math.ceil(CountSearchBlog / (pageSize + 0.0));
		
		
		List<Blog> blogs = new ArrayList<>();
		blogs = adminBlogService.SearchBlogByTitle(title, startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("bloglist", blogs);
		modelAndView.addObject("title", title);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchBlogPage);
		modelAndView.setViewName("OSAAT/admin/mainbloglist");

		return modelAndView;
	}
	
	@RequestMapping("DeleteBlogById")
	private String DeleteBlogById(@RequestParam("blogId") Long blogId) throws Exception {
		
		adminBlogService.DeleteBlogById(blogId);
		
		return "redirect:/OSAAT/admin/BlogList.action?startPage=1";
		
	}
	
	@RequestMapping("BlogTypeList")
	private String BlogTypeList(Model model) throws Exception {
		
		List<BlogType> blogTypes = new ArrayList<>();
		blogTypes = adminBlogService.SearchAllBlogType();
		model.addAttribute("blogtypelist", blogTypes);
		
		return "OSAAT/admin/mainblogtypelist";
	}
	
	@RequestMapping("PreAlterBlogType")
	private String PreAlterBlogType(@RequestParam("typeid") Integer typeid, @RequestParam("typename") String typename, Model model) throws Exception {
		
		model.addAttribute("typeid", typeid);
		model.addAttribute("typename", typename);
		
		return "OSAAT/admin/mainblogtypealter";
	}
	
	@RequestMapping("AlterBlogType")
	private String AlterBlogType(@RequestParam("typeid") Integer typeid, @RequestParam("typename") String typename, Model model) throws Exception {
		BlogType blogType = new BlogType();
		blogType.setBlogTypeid(typeid);
		blogType.setBlogTypeName(typename);
		adminBlogService.AlterBlogType(blogType);
		
		model.addAttribute("Tips", "类型已经完全修改");
		
		return "redirect:/OSAAT/admin/BlogTypeList.action";
	}
	
	@RequestMapping("AddBlogType")
	private String AddBlogType(@RequestParam("typename") String typename, Model model) throws Exception {
		BlogType blogType = new BlogType();
		blogType.setBlogTypeName(typename);
		adminBlogService.AddBlogType(blogType);
		
		model.addAttribute("Tips", "类型已经添加完毕");
		
		return "redirect:/OSAAT/admin/BlogTypeList.action";
	}
	
	/*@RequestMapping("DeleteBlogType")
	private String DeleteBlogType(@RequestParam("typeid") Integer typeid, Model model) throws Exception {
		
		adminBlogService.DeleteBlogType(typeid);
		
		model.addAttribute("Tips", "类型已经删除完毕");
		
		return "redirect:/OSAAT/admin/BlogTypeList.action";
	}*/
	
	
	@RequestMapping("BlogCommentList")
	private ModelAndView BlogCommentList(@RequestParam("startPage") Long startPage) throws Exception {
		
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllBlogComment = adminBlogService.CountAllBlogComment();
		Double BlogCommentPagesize = Math.ceil(CountAllBlogComment / (pageSize + 0.0));
		
		
		List<BlogComment> blogComments = new ArrayList<>();
		blogComments = adminBlogService.GetAllBlogComment(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("commentlist", blogComments);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", BlogCommentPagesize);
		modelAndView.setViewName("OSAAT/admin/mainblogcommentlist");

		return modelAndView;
	}
	
	@RequestMapping("DeleteBlogComment")
	private String DeleteBlogComment(@RequestParam("commentid") Long commentid, Model model) throws Exception {
		
		adminBlogService.DeleteBlogComment(commentid);
		
		model.addAttribute("Tips", "评论已经删除完毕");
		
		return "redirect:/OSAAT/admin/BlogCommentList.action?startPage=1";
	}
	
	@RequestMapping("SearchComment")
	private ModelAndView SearchComment(@RequestParam("startPage") Long startPage, @RequestParam("type") Integer type, @RequestParam("key") String key) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		Long commentid = null;
		Long userid = null;
		Long blogid = null;

		if (type.equals(1)) {
			commentid = Long.parseLong(key);
		} else if (type.equals(2)) {
			userid = Long.parseLong(key);
		} else {
			blogid = Long.parseLong(key);
		}
		
		long pageSize = 10;
		
		Long CountSearchBlogcomment = adminBlogService.CountSearchComment(commentid, userid, blogid);
		Double SearchBlogcommentPage = Math.ceil(CountSearchBlogcomment / (pageSize + 0.0));
		
		List<BlogComment> blogComments = new ArrayList<>();
		blogComments = adminBlogService.SearchComment(commentid, userid, blogid, startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("commentlist", blogComments);
		
		modelAndView.addObject("type", type);
		modelAndView.addObject("key", key);
		
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchBlogcommentPage);
		
		modelAndView.setViewName("OSAAT/admin/mainblogcommentlist");

		return modelAndView;
	}
	
	
}
