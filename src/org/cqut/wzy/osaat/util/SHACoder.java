package org.cqut.wzy.osaat.util;

import org.apache.commons.codec.digest.DigestUtils;

/**
 * SHA消息摘要组件
 * @author wangzhiyong qq：1366834931
 * @version 1.0
 * @since 1.0
 */
public abstract class SHACoder {
	/**
	 * SHA512消息摘要
	 * 
	 * @param data 待做摘要处理的数据 
	 * 
	 * @return byte[] 消息摘要
	 * 
	 * @throws Exception
	 */
	public static byte[] encodeSHA512(String data) throws Exception {
		// 执行消息摘要
		return DigestUtils.sha512(data);
	}

	/**
	 * SHA512Hex消息摘要
	 * 
	 * @param data 待做摘要处理的数据
	 * 
	 * @return String 消息摘要
	 * 
	 * @throws Exception
	 */
	public static String encodeSHA512Hex(String data) throws Exception {
		// 执行消息摘要
		return DigestUtils.sha512Hex(data);
	}
}