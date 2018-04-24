package org.cqut.wzy.osaat.util;

public class TestAES {
	public static void main(String[] args) throws Exception {
		String password = "123";
		String key = AESCoder.initKey();
		System.out.println("密钥：" + key);
		String key1 = "9d81dfc6ee886b0654e15784983f8ef0007883f7476e10553dd3d4311a313669";
		System.out.println("加密前：" + password);
		
		String jianmi = AESCoder.encrypt(password, key1);
		System.out.println("加密后：" + jianmi);
		
		String jiemihou = AESCoder.decrypt(jianmi, key1);
		System.out.println("解密后：" + jiemihou);
		
		String Md5 = MD5Coder.encodeMD5Hex(jianmi);
		
		System.out.println("Md5加密后：" + Md5);
	}

}
