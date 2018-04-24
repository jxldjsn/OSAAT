package org.cqut.wzy.osaat.controller.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.mail.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.admin.AdminIndexpageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class PageManage {

	@Autowired
	private AdminIndexpageService adminIndexpageService;

	@RequestMapping("MainPageList")
	private ModelAndView MainPageList(@RequestParam("startPage") Long startPage) throws Exception {

		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;

		Long CountAllIndexpage = adminIndexpageService.CountAllIndexpage();
		Double CountIndexpage = Math.ceil(CountAllIndexpage / (pageSize + 0.0));

		List<Indexpage> indexpages = new ArrayList<>();
		indexpages = adminIndexpageService.SearchAllIndexPage(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("indexpagelist", indexpages);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", CountIndexpage);
		modelAndView.setViewName("OSAAT/admin/mainpagelist");

		return modelAndView;
	}

	@RequestMapping("AddIndexpage")
	private String AddIndexpage(@RequestParam("title") String title, @RequestParam(value = "photo", required = false) MultipartFile photo,
			@RequestParam("sourceurl") String sourceurl, @RequestParam("type") Integer type,
			@RequestParam("pageabstract") String pageabstract, HttpServletRequest request, HttpSession session, Model model) throws Exception {

		// 用用户名和格式化时间作为文件名
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

		String ImgfileName;
		
		
		
		if (photo.isEmpty()) {
			ImgfileName = "";
		} else {
			try {
				// 获取主页图片路径
				String indexpagePath = request.getSession().getServletContext().getRealPath("/media/indexpageimage");

				File targetfile = new File(indexpagePath);
				// 如果文件夹不存在就新建一个
				if (!targetfile.exists()) {
					targetfile.mkdir();
				}

				// 用用户名和格式化时间作为文件名
				String dateString = formatter.format(date);

				ImgfileName = photo.getOriginalFilename();

				// 获得用户上传图片的类型
				String phototype = ImgfileName.split("\\.")[1];
				if (!phototype.equals("jpg") && !phototype.equals("jpeg") && !phototype.equals("gif") && !phototype.equals("png")
						&& !phototype.equals("bmp") && !phototype.equals("JPG") && !phototype.equals("PNG") && !phototype.equals("GIF")) {
					model.addAttribute("photoImageresult", "头像上传失败,请确保您的图片类型是jpg、gif、png之一！");
					return "OSAAT/admin/mainpageadd";
				}

				// 修改文件名
				ImgfileName = (String)session.getAttribute("adminusername") + ImgfileName.split("\\.")[0] +  dateString + "." + phototype;
				
				// 把用户上传的文件拷贝并保存到服务器的basic下的image文件夹下面
				try {
					photo.transferTo(new File(targetfile, ImgfileName));
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}

				model.addAttribute("photoImageresult", "图片上传成功！");
				
			} catch (Exception e) {
				e.printStackTrace();
				model.addAttribute("photoImageresult", "图片上传失败！");
				return "OSAAT/admin/mainpageadd";
			}
		
		}
		
		Indexpage indexpage = new Indexpage();
		indexpage.setTitle(title);
		if (!photo.isEmpty()) {
			indexpage.setImage("/media/indexpageimage/" + ImgfileName);
		}
		indexpage.setSourceType(type);
		indexpage.setSourceUrl(sourceurl);
		indexpage.setIndexAbstract(pageabstract);
		indexpage.setEditorTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		indexpage.setEditorPeople((String)session.getAttribute("adminusername"));
		
		
		adminIndexpageService.AddIndexPage(indexpage);
		
		return "redirect:/OSAAT/admin/MainPageList.action?startPage=1";
	}

	@RequestMapping("PreAlterIndexpage")
	private String PreAlterIndexpage(@RequestParam("id") Long id, Model model) throws Exception {
		
		Indexpage indexpage = new Indexpage();
		indexpage = adminIndexpageService.SelectIndexpageById(id);
		model.addAttribute("indexpage", indexpage);
		
		return "OSAAT/admin/mainpagealter";
	}
	
	@RequestMapping("AlterIndexpage")
	private String AlterIndexpage(@RequestParam("indexpageId") Long indexpageId, @RequestParam("title") String title, @RequestParam(value = "photo", required = false) MultipartFile photo,
			@RequestParam("sourceurl") String sourceurl, @RequestParam("type") Integer type,
			@RequestParam("pageabstract") String pageabstract, HttpServletRequest request, HttpSession session, Model model) throws Exception {
	
		// 用用户名和格式化时间作为文件名
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

		String ImgfileName;
		
		
		
		if (photo.isEmpty()) {
			ImgfileName = "";
		} else {
			try {
				// 获取主页图片路径
				String indexpagePath = request.getSession().getServletContext().getRealPath("/media/indexpageimage");

				File targetfile = new File(indexpagePath);
				// 如果文件夹不存在就新建一个
				if (!targetfile.exists()) {
					targetfile.mkdir();
				}

				// 用用户名和格式化时间作为文件名
				String dateString = formatter.format(date);

				ImgfileName = photo.getOriginalFilename();

				// 获得用户上传图片的类型
				String phototype = ImgfileName.split("\\.")[1];
				if (!phototype.equals("jpg") && !phototype.equals("jpeg") && !phototype.equals("gif") && !phototype.equals("png")
						&& !phototype.equals("bmp") && !phototype.equals("JPG") && !phototype.equals("PNG") && !phototype.equals("GIF")) {
					model.addAttribute("photoImageresult", "头像上传失败,请确保您的图片类型是jpg、gif、png之一！");
					return "OSAAT/admin/mainpageadd";
				}

				// 修改文件名
				ImgfileName = (String)session.getAttribute("adminusername") + ImgfileName.split("\\.")[0] +  dateString + "." + phototype;
				
				// 把用户上传的文件拷贝并保存到服务器的basic下的image文件夹下面
				try {
					photo.transferTo(new File(targetfile, ImgfileName));
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}

				model.addAttribute("photoImageresult", "图片上传成功！");
				
			} catch (Exception e) {
				e.printStackTrace();
				model.addAttribute("photoImageresult", "图片上传失败！");
				return "OSAAT/admin/mainpageadd";
			}
		
		}
				
		
		Indexpage indexpage = new Indexpage();
		indexpage.setIndexpageId(indexpageId);
		indexpage.setTitle(title);
		if (!photo.isEmpty()) {
			indexpage.setImage("/media/indexpageimage/" + ImgfileName);
		}
		indexpage.setSourceType(type);
		indexpage.setSourceUrl(sourceurl);
		indexpage.setIndexAbstract(pageabstract);
		indexpage.setEditorTime(new SimpleDateFormat("yyyyMMddHHmmss").format(date));
		indexpage.setEditorPeople((String)session.getAttribute("adminusername"));

		adminIndexpageService.UpdateIndexPage(indexpage);
		
		return "redirect:/OSAAT/admin/MainPageList.action?startPage=1";
	}

	@RequestMapping("DeleteIndexpage")
	private String DeleteIndexpage(@RequestParam("id") Long id) throws Exception {
		
		adminIndexpageService.DeleteIndexpageById(id);
		
		return "redirect:/OSAAT/admin/MainPageList.action?startPage=1";
	}
	
	@RequestMapping("SearchIndexpageByTitle")
	private ModelAndView SearchIndexpage(@RequestParam("key") String key, @RequestParam("startPage") Long startPage) throws Exception {
		
		if(startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}
		
		long pageSize = 20;
		
		Long CountSearchAllIndexpage = adminIndexpageService.ConntSearchIndexpageByTitle(key);
		Double SearchCountIndexpage = Math.ceil(CountSearchAllIndexpage / (pageSize + 0.0));
		
		List<Indexpage> indexpages = new ArrayList<>();
		indexpages = adminIndexpageService.SearchIndexpageByTitle(key, startPage * pageSize, pageSize);
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("indexpagelist", indexpages);
		modelAndView.addObject("key", key);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", SearchCountIndexpage);
		modelAndView.setViewName("OSAAT/admin/mainpagesearchresultlist");
		
		return modelAndView;
		
	}

}
