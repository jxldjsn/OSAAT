package org.cqut.wzy.osaat.controller.music;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("OSAAT/music/")
public class AddMyMusic {

	@Autowired
	private MusicService musicService;

	@RequestMapping("AddMyMusic")
	private String AddMySelfMusic(@RequestParam(value = "uploadsong", required = false) MultipartFile uploadsong,
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
				return "OSAAT/music/musicupload";
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
			return "OSAAT/music/musicupload";
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
				return "OSAAT/music/musicupload";
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
			return "OSAAT/music/musicupload";
		}

		Long AddMusicUSerId = (Long) session.getAttribute("id");
		String Type = session.getAttribute("type") + "";

		Music music = new Music();
		music.setSongname(songname);
		music.setSonger(songer);
		music.setImagesrc(musicImgfileName);
		music.setSongsrc("Media/" + musicFileName);
		music.setUploadperson(AddMusicUSerId);
		music.setSongtype(Type);
		music.setTime(new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));

		musicService.InsertMyMusic(music);

		model.addAttribute("addsongResult", "添加我的私人音乐成功！");
		return "OSAAT/music/musicupload";
		
	}

}
