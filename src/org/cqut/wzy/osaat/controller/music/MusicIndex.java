package org.cqut.wzy.osaat.controller.music;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/music/")
public class MusicIndex{

	@Autowired
	private MusicService musicService;
	
	@RequestMapping("MusicIndex")
	private ModelAndView TheMusicIndex(HttpSession session) throws Exception{
		
		Long userId = (Long) session.getAttribute("id");
		
		ModelAndView modelAndView = new ModelAndView();
		List<Music> mymusiclist = new ArrayList<Music>();
		List<Music> systemmusiclist = new ArrayList<Music>();
		
		mymusiclist = musicService.SelectAllMyMusic(userId);
		systemmusiclist = musicService.SelectAllSystemMusic();
		
		modelAndView.addObject("mymusiclist", mymusiclist);
		modelAndView.addObject("systemmusiclist", systemmusiclist);
		
		modelAndView.setViewName("OSAAT/music/index");
		
		return modelAndView;
	}
	
}
