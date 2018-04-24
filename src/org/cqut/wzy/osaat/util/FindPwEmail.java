package org.cqut.wzy.osaat.util;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class FindPwEmail {
	// 发送激活码的邮件
	public static void sendFindPwEmail(String content, String email) {
		String isSSL = "true";
		String host = "smtp.139.com";
		int port = 465;
		String from = "wzyadmin@139.com";
		String to = email;
		boolean isAuth = true;
		final String username = "wzyadmin@139.com";
		final String password = "jxldjsn1994";

		Properties props = new Properties();
		props.put("mail.smtp.ssl.enable", isSSL);
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.port", port);
		props.put("mail.smtp.auth", isAuth);

		Session session = Session.getDefaultInstance(props, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});

		try {
			
			MimeMessage message = new MimeMessage(session);

			message.setFrom(new InternetAddress(from));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setSubject("户外运动及娱乐部落密码找回");
			
			Multipart multipart  = new MimeMultipart(); // 新建一个MimeMultipart对象来存放多个BodyPart对象
			BodyPart mdp = new MimeBodyPart();//新建一个存放新建内容的body part对象
			
			mdp.setContent(content, "text/html;charset=UTF-8");
			
			multipart.addBodyPart(mdp); // 将含有信件内容的bodypart加入到MimeMultipart对象中
			
			message.setContent(multipart);
			message.saveChanges();

			Transport.send(message);
			
			
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
