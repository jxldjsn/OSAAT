package org.cqut.wzy.osaat.controller.music;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("OSAAT/music/")
public class DownLoadMusic {

	@RequestMapping(value = "DownLoadMusic", method = RequestMethod.GET)
	public ResponseEntity<byte[]> DownLoadSystemMusic(@RequestParam("songsrc") String songsrc, @RequestParam("songname") String songname,HttpServletRequest request) throws IOException {

		// 获取项目根目录
		String WZYPath = request.getSession().getServletContext().getRealPath("") + "/OSAAT/music/";

		String path = WZYPath + "/" + songsrc;
		File file = new File(path);
		HttpHeaders headers = new HttpHeaders();
		songname = songname + "." + songsrc.split("\\.")[1];
		
		String fileName = new String(songname.getBytes("UTF-8"), "iso-8859-1");// 为了解决中文名称乱码问题
		headers.setContentDispositionFormData("attachment", fileName);
		headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
		return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.CREATED);
	}
}
