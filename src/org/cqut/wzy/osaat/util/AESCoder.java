package org.cqut.wzy.osaat.util;

import java.security.Key;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Hex;

/**
*AES安全编码组件
*@author wangzhiyng qq:1366834931
*version 1.0
*/
public abstract class AESCoder {

	/**
	 * 密钥算法
	 */
	public static final String KEY_ALGORITHM = "AES";

	/**
	 * 加密/解密 / 工作模式 / 填充方式
	 * Java 7支持PKCS5PADDING填充方式
	 * Bouncy Castle支持PKCS7Padding填充方式
	 */
	public static final String CIPHER_ALGORITHM = "AES/ECB/PKCS5Padding";

	/**
	 * 转换密钥
	 * @param key 二进制密钥
	 * @return key 密钥
	 * @throws Exception
	 */
	private static Key toKey(byte[] key) throws Exception {
		//实例化DES密钥材料
		SecretKey secretKey = new SecretKeySpec(key, KEY_ALGORITHM);
		return secretKey;
	}

	/**
	 * 解密
	 * @param data 待解密数据
	 * @param key 密钥
	 * @return byte[] 解密数据
	 * @throws Exception
	 */
	public static String decrypt(String data, String key) throws Exception {
		
		byte[] bdata = Hex.decodeHex(data.toCharArray());
		byte[] bkey = Hex.decodeHex(key.toCharArray());
		
		//还原密钥
		Key k = toKey(bkey);
		/**
	 	 * 实例化
	 	 * 使用PKCS7Padding填充方式,按如下方式实现
	 	 * Cipher.getInstance(CIPHER_ALGORITHM, "BC");
	 	 */
		Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
		// 初始化，设置为解密模式
		cipher.init(Cipher.DECRYPT_MODE, k);
		// 执行操作
		return new String(cipher.doFinal(bdata));
	}

	/**
	 * 加密
	 * @param data 待加密数据
	 * @param key 密钥
	 * @return byte[] 加密数据
	 * @throws Exception
	 */
	public static String encrypt(String data, String key) throws Exception {
		
		byte[] bdata = data.getBytes();
		byte[] bkey = Hex.decodeHex(key.toCharArray());
		
		//还原密钥
		Key k = toKey(bkey);
		/**
	 	 * 实例化
	 	 * 使用PKCS7Padding填充方式,按如下方式实现
	 	 * Cipher.getInstance(CIPHER_ALGORITHM, "BC");
	 	 */
		Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
		// 初始化，设置为加密模式
		cipher.init(Cipher.ENCRYPT_MODE, k);
		// 执行操作
		return Hex.encodeHexString(cipher.doFinal(bdata));
	}

	/**
	 * 生成密钥 <br>
	 * @return byte[] 二进制密钥
	 * @throws Exception
	 */
	public static String initKey() throws Exception {

		//实例化
		KeyGenerator kg = KeyGenerator.getInstance(KEY_ALGORITHM);

		// AES 要求密钥长度为128位、192位或256位
		kg.init(256);

		//生成密钥钥匙
		SecretKey secretKey = kg.generateKey();

		//获得密钥的二进制编码形式
		return Hex.encodeHexString(secretKey.getEncoded());
	}
   
}

