package org.cqut.wzy.osaat.controller.music;

import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/music/")
public class MusicDelete {

	@Autowired
	private MusicService musicService;

	@RequestMapping("MusicDelete")
	private String DeleteMyMusic(@RequestParam("songId") Long songId, Model model, HttpSession session)
			throws Exception {
		Long userId = (Long) session.getAttribute("id");

		Music music = new Music();
		music = musicService.SelectMusicById(songId);

		if (userId.equals(music.getUploadperson())) {
			musicService.DeleteMusicById(songId);
			model.addAttribute("tips", "删除音乐成功！");
		} else {
			model.addAttribute("tips", "对不起，您只能删除您自己的音乐！");
		}

//		return "OSAAT/music/allmymusic";
		return "redirect:/OSAAT/music/AllMySong.action";
	}

}