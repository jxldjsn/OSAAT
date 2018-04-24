package basic.test;

public class TestSplit {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String aa = "dddd-ffff";
		System.out.println(aa.substring(aa.split("-")[0].length() + 1));
		
		Byte byte1 = 0;
		String url = "/OSAAT/OSAAT/admin/AdminIndex.action";
		
		System.out.println(url.contains("admin"));
	}

}
