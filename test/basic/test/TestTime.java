package basic.test;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestTime {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calendar c = Calendar.getInstance();
		c.add(Calendar.DAY_OF_MONTH, 1);
		Date date = c.getTime();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		System.out.println(sdf.format(date));
		
		Date now = new Date();
		
		System.out.println(now.toString() + "     " + date.getTime() + "      " + (now.getTime() > date.getTime()));
	
		System.out.println(convert(now));
//		2016-10-26 11:01:30.0
		System.out.println(ConvertString("dgsf"));
	
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
