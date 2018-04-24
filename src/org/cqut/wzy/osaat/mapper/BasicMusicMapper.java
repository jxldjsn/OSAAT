package org.cqut.wzy.osaat.mapper;

import java.util.List;

import org.cqut.wzy.osaat.entity.Music;

public interface BasicMusicMapper {
	
	List<Music> SearchAllSystemMusic() throws Exception;
	
	List<Music> SearchAllMyMusic(Long userId) throws Exception;
	
	List<Music> SearchAllMusic() throws Exception;
	
	
}
