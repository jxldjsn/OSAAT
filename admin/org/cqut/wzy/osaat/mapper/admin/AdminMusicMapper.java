package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;

public interface AdminMusicMapper {
	
	Long CountAllMusic() throws Exception;
	
	List<Music> SearchAllMusic(Long startPage, Long pageSize) throws Exception;
	
	void AddMusic(Music music) throws Exception;
	
	Music SearchMusicById(Long musicid) throws Exception;
	
	void UpdateMusic(Music music) throws Exception;
	
	void DeleteMusic(Long musicid) throws Exception;
	
	Long CountMusicByName(String key) throws Exception;
	
	List<Music> SearchMusicByName(String key, Long startPage, Long pageSize) throws Exception;
	
}