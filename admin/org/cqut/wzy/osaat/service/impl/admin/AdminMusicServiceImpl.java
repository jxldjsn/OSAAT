package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.mapper.admin.AdminBlogMapper;
import org.cqut.wzy.osaat.mapper.admin.AdminMusicMapper;
import org.cqut.wzy.osaat.service.admin.AdminMusicService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminMusicServiceImpl implements AdminMusicService {

	@Autowired
	private AdminMusicMapper adminMusicMapper;
	
	/**
	 * <p>Title: CountAllMusic</p>
	 * <p>Description:统计所有的音乐的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllMusic() throws Exception {
		return adminMusicMapper.CountAllMusic();
	}
	
	/**
	 * <p>Title: SearchAllMusic</p>
	 * <p>Description:获取所有的音乐 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SearchAllMusic(Long startPage, Long pageSize) throws Exception {
		return adminMusicMapper.SearchAllMusic(startPage, pageSize);
	}
	
	/**
	 * <p>Title: AddMusic</p>
	 * <p>Description:添加系统音乐 </p>
	 * @param Music music
	 * @return 
	 * @throws Exception
	 */
	public void AddMusic(Music music) throws Exception {
		adminMusicMapper.AddMusic(music);
	}
	
	/**
	 * <p>Title: SearchMusicById</p>
	 * <p>Description:通过Id搜索音乐 </p>
	 * @param Long musicid
	 * @return Music
	 * @throws Exception
	 */
	public Music SearchMusicById(Long musicid) throws Exception {
		return adminMusicMapper.SearchMusicById(musicid);
	}

	/**
	 * <p>Title: UpdateMusic</p>
	 * <p>Description:更新系统音乐 </p>
	 * @param Music music
	 * @return 
	 * @throws Exception
	 */
	public void UpdateMusic(Music music) throws Exception {
		adminMusicMapper.UpdateMusic(music);
	}
	

	/**
	 * <p>Title: DeleteMusic</p>
	 * <p>Description:删除音乐 </p>
	 * @param Long musicid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteMusic(Long musicid) throws Exception {
		adminMusicMapper.DeleteMusic(musicid);
	}
	
	/**
	 * <p>Title: CountMusicByName</p>
	 * <p>Description:统计包含关键字的所有的音乐的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountMusicByName(String key) throws Exception {
		return adminMusicMapper.CountMusicByName(key);
	}
	
	/**
	 * <p>Title: SearchMusicByName</p>
	 * <p>Description:获取包含关键字的所有音乐 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Music>
	 * @throws Exception
	 */
	public List<Music> SearchMusicByName(String key, Long startPage, Long pageSize) throws Exception {
		return adminMusicMapper.SearchMusicByName(key, startPage, pageSize);
	}
	
}
