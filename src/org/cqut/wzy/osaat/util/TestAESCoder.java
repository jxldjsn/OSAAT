package org.cqut.wzy.osaat.util;

import org.apache.commons.codec.binary.Base64;

public class TestAESCoder {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		String jianyanmiyoa = "==+";
		String inputStr = "123王志勇";
//		byte[] inputData = inputStr.getBytes();

		System.err.println("原文：\t" + inputStr);

		// 初始化密钥
		String key = AESCoder.initKey();

		System.err.println("密钥：\t" + key);
		
//		String strkey = parseByte2HexStr(key);
//		bate[] key1 = Base64.encodeBase64(Strkey.getBytes());
//		System.err.println("看看转换是否相同：\t" + key.equals(parseHexStr2Byte(strkey)) + "   ###");
		
		// 加密
		String inputData = AESCoder.encrypt(inputStr, key);
		System.err.println("加密后：\t" + inputData);
		
		//解密
//		byte[] key1 = parseHexStr2Byte(strkey);

		// 解密
		String outputData = AESCoder.decrypt(inputData, key);
//		String outputStr = new String(outputData);
		System.err.println("解密后：\t" + outputData + "   ###");
	}
	
	/**
     * 二进制--》十六进制转化
     * 
     * @param buf
     * @return
     */
    private static String parseByte2HexStr(byte buf[]) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < buf.length; i++) {
            String hex = Integer.toHexString(buf[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            sb.append(hex.toUpperCase());
        }
        return sb.toString();
    }
 
    /**
     * 十六进制--》二进制转化
     * 
     * @param hexStr
     * @return
     */
    private static byte[] parseHexStr2Byte(String hexStr) {
        if (hexStr.length() < 1) {
            return null;
        }
 
        byte[] result = new byte[hexStr.length() / 2];
        for (int i = 0; i < hexStr.length() / 2; i++) {
            int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);
            int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2),
                    16);
            result[i] = (byte) (high * 16 + low);
        }
        return result;
    }

}
