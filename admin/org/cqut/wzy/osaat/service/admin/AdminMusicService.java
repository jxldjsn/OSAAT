package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;

/**
 * 
 * <p>Title: AdminMusicService</p>
 * <p>Description:管理员管理音乐的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-30下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-30<br/>
 * 历史修订：<br/>
 */
public interface AdminMusicService {
	
	/**
	 * <p>Title: CountAllMusic</p>
	 * <p>Description:统计所有的音乐的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllMusic() throws Exception;
	
	/**
	 * <p>Title: SearchAllMusic</p>
	 * <p>Description:获取所有的音乐 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SearchAllMusic(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: AddMusic</p>
	 * <p>Description:添加系统音乐 </p>
	 * @param Music music
	 * @return 
	 * @throws Exception
	 */
	public void AddMusic(Music music) throws Exception;
	
	/**
	 * <p>Title: SearchMusicById</p>
	 * <p>Description:通过Id搜索音乐 </p>
	 * @param Long musicid
	 * @return Music
	 * @throws Exception
	 */
	public Music SearchMusicById(Long musicid) throws Exception;
	
	/**
	 * <p>Title: UpdateMusic</p>
	 * <p>Description:更新系统音乐 </p>
	 * @param Music music
	 * @return 
	 * @throws Exception
	 */
	public void UpdateMusic(Music music) throws Exception;
	
	/**
	 * <p>Title: DeleteMusic</p>
	 * <p>Description:删除音乐 </p>
	 * @param Long musicid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteMusic(Long musicid) throws Exception;
	
	/**
	 * <p>Title: CountMusicByName</p>
	 * <p>Description:统计包含关键字的所有的音乐的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountMusicByName(String key) throws Exception;
	
	/**
	 * <p>Title: SearchMusicByName</p>
	 * <p>Description:获取包含关键字的所有音乐 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SearchMusicByName(String key, Long startPage, Long pageSize) throws Exception;
	
	
}
