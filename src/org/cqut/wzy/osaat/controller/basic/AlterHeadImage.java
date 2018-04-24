package org.cqut.wzy.osaat.controller.basic;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.cqut.wzy.osaat.entity.User;
import org.cqut.wzy.osaat.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping("OSAAT/basic/")
public class AlterHeadImage {

	@Autowired
	private BasicService basicService;

	@RequestMapping("AlterHeadImage")
	private String AlterUserHeadImage(@RequestParam(value = "userHeadImage", required = false) MultipartFile userHeadImage,
			HttpServletRequest request, Model model, HttpSession session) throws Exception {

		try {
			// 获取用户头像路径
			String path = request.getSession().getServletContext().getRealPath("/HeadPortrait");

			File targetfile = new File(path);
			// 如果文件夹不存在就新建一个
			if (!targetfile.exists()) {
				targetfile.mkdir();
			}

			// 用用户名和格式化时间作为文件名
			Date date = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
			String dateString = formatter.format(date);

			String fileName = userHeadImage.getOriginalFilename();
			
			// 获得用户上传图片的类型
			String type = fileName.split("\\.")[1];
			if (!type.equals("jpg") && !type.equals("jpeg") && !type.equals("gif") && !type.equals("png")
					&& !type.equals("bmp") && !type.equals("JPG") && !type.equals("PNG") && !type.equals("GIF")) {
				model.addAttribute("result", "头像上传失败,请确保您的图片类型是jpg、gif、png之一！");
				return "OSAAT/basic/alterheadimage";
			}

			// 通过session获取当前用户的id和用户名
			Long id = (Long) session.getAttribute("id");
			String name = (String) session.getAttribute("username");

			// 修改文件名
			fileName = name + dateString + "." + type;

			// 把用户上传的文件拷贝并保存到服务器的HeadPortrait文件夹下面
			try {
				userHeadImage.transferTo(new File(targetfile, fileName));
			} catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}

			// 把图片的路径修改一下,返回到前台进行显示
			String fileUrl = "HeadPortrait/" + fileName;

			User user = new User();
			user.setId(id);
			user.setPhoto(fileUrl);

			// 把用户上传的图片的新路径保存到数据库里面去
			basicService.UpdateUserInfo(user);

			// 保存新的头像路径
			session.setAttribute("photo", fileUrl);

			model.addAttribute("result", "头像上传成功！");
			return "OSAAT/basic/alterheadimage";
		} catch (Exception e) {
			e.printStackTrace();
			model.addAttribute("result", "头像上传失败！");
			return "OSAAT/basic/alterheadimage";
		}

	}

}
