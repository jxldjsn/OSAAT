package org.cqut.wzy.osaat.controller.admin;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.Game;
import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.service.admin.AdminBlogService;
import org.cqut.wzy.osaat.service.admin.AdminMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("OSAAT/admin/")
public class MusicManage {

	@Autowired
	private AdminMusicService adminMusicService;
	
	@RequestMapping("MusicList")
	private ModelAndView MusicList(@RequestParam("startPage") Long startPage) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountAllMusic = adminMusicService.CountAllMusic();
		Double totalpage = Math.ceil(CountAllMusic / (pageSize + 0.0));
		
		
		List<Music> musics = new ArrayList<>();
		musics = adminMusicService.SearchAllMusic(startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("musiclist", musics);

		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", totalpage);
		modelAndView.setViewName("OSAAT/admin/mainmusiclist");

		return modelAndView;
	}
	
	@RequestMapping("AddMusic")
	private String AddMusic(@RequestParam(value = "uploadsong", required = false) MultipartFile uploadsong,
			@RequestParam(value = "songImage", required = false) MultipartFile songImage,
			@RequestParam("songname") String songname, @RequestParam("songer") String songer,
			HttpServletRequest request, Model model, HttpSession session) throws Exception {
				
		// 用用户名和格式化时间作为文件名
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

		String musicImgfileName, musicFileName;
		
		// 上传音乐文件
		try {
			// 获取用户头像路径
			String musicPath = request.getSession().getServletContext().getRealPath("/OSAAT/music/Media");

			File targetfile = new File(musicPath);
			// 如果文件夹不存在就新建一个
			if (!targetfile.exists()) {
				targetfile.mkdir();
			}

			// 用用户名和格式化时间作为文件名
			String dateString = formatter.format(date);

			musicFileName = uploadsong.getOriginalFilename();

			// 获得用户上传图片的类型
			String type = musicFileName.split("\\.")[1];
			if (!type.equals("mp3") && !type.equals("MP3") && !type.equals("ogg") && !type.equals("wav")) {
				model.addAttribute("uploadresult", "音乐上传失败,请确保您的音乐类型是mp3、ogg、wav之一！");
				return "OSAAT/admin/mainmusicupload";
			}

			// 修改文件名
			musicFileName = musicFileName.split("\\.")[0] + dateString + "." + type;

			// 把用户上传的文件拷贝并保存到服务器的HeadPortrait文件夹下面
			try {
				uploadsong.transferTo(new File(targetfile, musicFileName));
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}

			model.addAttribute("uploadresult", "音乐上传成功！");

		} catch (Exception e) {
			e.printStackTrace();
			model.addAttribute("songImageresult", "音乐上传失败！");
			return "OSAAT/admin/mainmusicupload";
		}
		
		try {
			// 获取音乐图片路径
			String musicPath = request.getSession().getServletContext().getRealPath("/OSAAT/music/Images");

			File targetfile = new File(musicPath);
			// 如果文件夹不存在就新建一个
			if (!targetfile.exists()) {
				targetfile.mkdir();
			}

			// 用用户名和格式化时间作为文件名
			String dateString = formatter.format(date);

			musicImgfileName = songImage.getOriginalFilename();

			// 获得用户上传图片的类型
			String type = musicImgfileName.split("\\.")[1];
			if (!type.equals("jpg") && !type.equals("jpeg") && !type.equals("gif") && !type.equals("png")
					&& !type.equals("bmp") && !type.equals("JPG") && !type.equals("PNG") && !type.equals("GIF")) {
				model.addAttribute("songImageresult", "头像上传失败,请确保您的图片类型是jpg、gif、png之一！");
				return "OSAAT/admin/mainmusicupload";
			}

			String name = (String) session.getAttribute("username");

			// 修改文件名
			musicImgfileName = name + dateString + "." + type;

			// 把用户上传的文件拷贝并保存到服务器的HeadPortrait文件夹下面
			try {
				songImage.transferTo(new File(targetfile, musicImgfileName));
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}

			model.addAttribute("songImageresult", "图片上传成功！");
			
		} catch (Exception e) {
			e.printStackTrace();
			model.addAttribute("songImageresult", "图片上传失败！");
			return "OSAAT/admin/mainmusicupload";
		}

		Long AddMusicUSerId = ((Integer) session.getAttribute("adminid")).longValue();
		

		Music music = new Music();
		music.setSongname(songname);
		music.setSonger(songer);
		music.setImagesrc(musicImgfileName);
		music.setSongsrc("Media/" + musicFileName);
		music.setUploadperson(AddMusicUSerId);
		music.setSongtype(1+"");
		music.setTime(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));

		adminMusicService.AddMusic(music);

		model.addAttribute("addsongResult", "添加系统音乐成功！");
		return "OSAAT/admin/mainmusicupload";
		
	}
	
	@RequestMapping("PreAlterMusic")
	private String PreAlterMusic(@RequestParam("musicid") Long musicid, Model model) throws Exception {
		
		Music music = new Music();
		music = adminMusicService.SearchMusicById(musicid);
		
		model.addAttribute("music", music);
		
		return "OSAAT/admin/mainmusicalter";
		
	}
	
	@RequestMapping("AlterMusic")
	private String AlterMusic(@RequestParam("musicid") Long musicid, @RequestParam("songname") String songname, @RequestParam("songer") String songer, @RequestParam("imagesrc") String imagesrc, @RequestParam("songsrc") String songsrc, Model model) throws Exception {
		
		Music music = new Music();
		music.setSongid(musicid);
		music.setSonger(songer);
		music.setSongname(songname);
		music.setImagesrc(imagesrc);
		music.setSongsrc(songsrc);
		
		adminMusicService.UpdateMusic(music);
		
		model.addAttribute("Tips", "音乐已经成功修改！");
		
		return "redirect:/OSAAT/admin/MusicList.action?startPage=1";
	}
	
	@RequestMapping("DeleteMusic")
	private String DeleteMusic(@RequestParam("musicid") Long musicid, Model model) throws Exception {
		adminMusicService.DeleteMusic(musicid);
		
		model.addAttribute("Tips", "音乐已经成功删除！");
		
		return "redirect:/OSAAT/admin/MusicList.action?startPage=1";
	}
	
	@RequestMapping("SearchMusicByName")
	private ModelAndView SearchMusicByName(@RequestParam("startPage") Long startPage, @RequestParam("key") String key) throws Exception {
		if (startPage == null) {
			startPage = 0l;
		} else {
			startPage = startPage - 1;
		}

		long pageSize = 10;
		
		Long CountSearchMusic = adminMusicService.CountMusicByName(key);
		
		Double totalPage = Math.ceil(CountSearchMusic / (pageSize + 0.0));
		
		
		List<Music> musics = new ArrayList<>();
		musics = adminMusicService.SearchMusicByName(key, startPage * pageSize, pageSize);

		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("musiclist", musics);
		modelAndView.addObject("key", key);
		modelAndView.addObject("pagenumber", startPage + 1);
		modelAndView.addObject("pagecount", totalPage);
		modelAndView.setViewName("OSAAT/admin/mainmusicsearchlist");

		return modelAndView;
		
	}
	
	
}
