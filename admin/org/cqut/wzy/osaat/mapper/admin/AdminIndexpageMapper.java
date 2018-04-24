package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;

public interface AdminIndexpageMapper {
	
	Long CountAllIndexPage() throws Exception;

	List<Indexpage> SearchAllIndexpage(Long startPage, Long pageSize) throws Exception;
    
	void AddIndexPage(Indexpage indexpage) throws Exception;
	
	Indexpage SelectIndexpageById(Long id) throws Exception;
	
	void UpdateIndexPage(Indexpage indexpage) throws Exception;
	
	void DeleteIndexpageById(Long id) throws Exception;
	
	Long ConntSearchIndexpageByTitle(String key) throws Exception;
	
	List<Indexpage> SearchIndexpageByTitle(String key, Long startPage, Long pageSize) throws Exception;
	
}