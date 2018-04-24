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
public class AllMySong {

	@Autowired
	private MusicService musicService;

	@RequestMapping("AllMySong")
	private ModelAndView SelectMyMusic(HttpSession session) throws Exception {
		Long userId = (Long) session.getAttribute("id");
		// 用用户的类型来表示音乐文件是个人文件还是系统文件，其中1表示系统文件。
		String musictype = session.getAttribute("type") + "";
		List<Music> songlist = new ArrayList<Music>();
		if (musictype.equals("1")) {
			songlist = musicService.SelectAllMusic();
		} else {
			songlist = musicService.SelectAllMyMusic(userId);
		}
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("songlist", songlist);
		modelAndView.setViewName("OSAAT/music/allmymusic");
		return modelAndView;
	}

	
}
