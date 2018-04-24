package org.cqut.wzy.osaat.controller.admin;

import org.cqut.wzy.osaat.entity.admin.News;
import org.cqut.wzy.osaat.service.admin.AdminNewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/news/")
public class NewsDetail {

	@Autowired
	private AdminNewsService adminNewsService;
	
	@RequestMapping("NewsDetail")
	private String NewsDetail(@RequestParam("id") Long id, Model model) throws Exception {
		News news = new News();
		news = adminNewsService.SearchNewsById(id);
		
		model.addAttribute("news", news);
		
		return "OSAAT/news/news";
	}
	
}
