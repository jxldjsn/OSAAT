package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.admin.News;

public interface AdminNewsMapper {
	
	Long CountAllNews() throws Exception;
	
	List<News> SearchAllNews(Long startPage, Long pageSize) throws Exception;
	
	Long CountAllSearchNews(String key) throws Exception;
	
	List<News> SearchNewsByKey(String key, Long startPage, Long pageSize) throws Exception;
	
}
