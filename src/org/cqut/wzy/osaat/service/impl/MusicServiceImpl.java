package org.cqut.wzy.osaat.service.impl;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;
import org.cqut.wzy.osaat.mapper.BasicMusicMapper;
import org.cqut.wzy.osaat.mapper.MusicMapper;
import org.cqut.wzy.osaat.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;

public class MusicServiceImpl implements MusicService {
	
	@Autowired
	private BasicMusicMapper basicMusicMapper;
	
	@Autowired
	private MusicMapper musicMapper;

	/**
	 * <p>Title: SelectAllSystemMusic</p>
	 * <p>Description:获取所有的系统音乐 </p>
	 * @param 
	 * @return List<Music>
	 * @throws Exception
	 */
	@Override
	public List<Music> SelectAllSystemMusic() throws Exception {
		// TODO Auto-generated method stub
		return basicMusicMapper.SearchAllSystemMusic();
	}

	/**
	 * <p>Title: SelectAllMyMusic</p>
	 * <p>Description:获取特定用户（userId）的音乐 </p>
	 * @param userId
	 * @return List<Music>
	 * @throws Exception
	 */
	@Override
	public List<Music> SelectAllMyMusic(Long userId) throws Exception {
		// TODO Auto-generated method stub
		return basicMusicMapper.SearchAllMyMusic(userId);
	}

	/**
	 * <p>Title: InsertMyMusic</p>
	 * <p>Description:持久化用户音乐 </p>
	 * @param music
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void InsertMyMusic(Music music) throws Exception {
		// TODO Auto-generated method stub
		musicMapper.insert(music);
	}

	/**
	 * <p>Title: SelectAllMusic</p>
	 * <p>Description:获取所有的音乐 </p>
	 * @param 
	 * @return List<Music>
	 * @throws Exception
	 */
	@Override
	public List<Music> SelectAllMusic() throws Exception {
		// TODO Auto-generated method stub
		return basicMusicMapper.SearchAllMusic();
	}

	/**
	 * <p>Title: DeleteMusicById</p>
	 * <p>Description:根据用户选择音乐的ID删除音乐 </p>
	 * @param songId
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void DeleteMusicById(Long songId) throws Exception {
		// TODO Auto-generated method stub
		musicMapper.deleteByPrimaryKey(songId);
	}

	/**
	 * <p>Title: SelectMusicById</p>
	 * <p>Description:根据用户选择音乐的ID查找音乐 </p>
	 * @param songId
	 * @return music
	 * @throws Exception
	 */
	@Override
	public Music SelectMusicById(Long songId) throws Exception {
		// TODO Auto-generated method stub
		return musicMapper.selectByPrimaryKey(songId);
	}
}
