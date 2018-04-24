package org.cqut.wzy.osaat.controller.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.core.convert.converter.Converter;

/**
 * 
 * <p>Title: CustomDateConverter</p>
 * <p>Description:日期转换器 </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong qq：1366834931
 * @date	2016-4-13下午5:49:14
 * @version 1.0
 */
public class CustomDateConverter implements Converter<String,Date>{

	@Override
	public Date convert(String source) {
		
		//实现 将日期串转成日期类型(格式是yyyy-MM-dd HH:mm:ss)
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		try {
			//转成直接返回
			return simpleDateFormat.parse(source);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//如果参数绑定失败返回null
		return null;
	}
	
	public static String convert(Date source) {
		
		//实现 将日期转成日期类型(格式是yyyy-MM-dd HH:mm:ss)
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
		//转成后直接返回
		return simpleDateFormat.format(source);
	}
	
	public static String ConvertString(String source) {
		
		if (source.length() <= 2) {
			return "";
		} else {
			return source.substring(0, source.length()-2);
		}
	}

}
