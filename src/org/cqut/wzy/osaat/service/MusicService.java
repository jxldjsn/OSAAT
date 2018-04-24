package org.cqut.wzy.osaat.service;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;

/**
 * <p>Title: MusicService</p>
 * <p>Description:音乐基础service </p>
 * <p>Company: WZY社区</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2016-7-7下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2016-7-1<br/>
 * 历史修订：<br/>
 */
public interface MusicService {

	/**
	 * <p>Title: SelectAllSystemMusic</p>
	 * <p>Description:获取所有的系统音乐 </p>
	 * @param 
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SelectAllSystemMusic() throws Exception;
	
	/**
	 * <p>Title: SelectAllMyMusic</p>
	 * <p>Description:获取特定用户（userId）的音乐 </p>
	 * @param userId
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SelectAllMyMusic(Long userId) throws Exception;
	
	/**
	 * <p>Title: SelectAllMusic</p>
	 * <p>Description:获取所有的音乐 </p>
	 * @param 
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SelectAllMusic() throws Exception;
	
	/**
	 * <p>Title: InsertMyMusic</p>
	 * <p>Description:持久化用户音乐 </p>
	 * @param music
	 * @return 
	 * @throws Exception
	 */
	public void InsertMyMusic(Music music) throws Exception;
	
	/**
	 * <p>Title: DeleteMusicById</p>
	 * <p>Description:根据用户选择音乐的ID删除音乐 </p>
	 * @param songId
	 * @return 
	 * @throws Exception
	 */
	public void DeleteMusicById(Long songId) throws Exception;
	
	/**
	 * <p>Title: SelectMusicById</p>
	 * <p>Description:根据用户选择音乐的ID查找音乐 </p>
	 * @param songId
	 * @return music
	 * @throws Exception
	 */
	public Music SelectMusicById(Long songId) throws Exception;
	
}
