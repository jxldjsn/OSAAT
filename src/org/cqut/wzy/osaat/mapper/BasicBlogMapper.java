package org.cqut.wzy.osaat.mapper;

import java.util.List;

import org.cqut.wzy.osaat.entity.view.IndexBlogBroadsideView;
import org.cqut.wzy.osaat.entity.view.IndexBlogView;
import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogType;

public interface BasicBlogMapper {
	
	Long CountBlog() throws Exception;
	
	List<BlogType> SelectAllBlogType() throws Exception;
	
	List<IndexBlogView> SelectAllBlog(Long startPage, Long pageSize) throws Exception;
	
	List<IndexBlogBroadsideView> SearchNumNewBlog(int number) throws Exception;

	List<IndexBlogBroadsideView> SearchNumHotBrowseBlog(int number) throws Exception;
	
	List<IndexBlogBroadsideView> SearchNumHotPraiseBlog(int number) throws Exception;
	
	List<IndexBlogBroadsideView> SerachNumTypeBlog(int type, int number) throws Exception;
	
	String SelectUserNameById(Long userId) throws Exception;
	
	List<Blog> SearchBlogByUserId(Long userId, Long startPage, Long pageSize) throws Exception;
	
	List<IndexBlogView> SelectByBlogTitle(String title, Long startPage, Long pageSize) throws Exception;
	
	List<IndexBlogView> SelectBlogByType(Integer typeId, Long startPage, Long pageSize) throws Exception;
	
	Long CountBlogByUserId(Long userId) throws Exception;
	
	Long CountBlogByTitleKey(String blogkey) throws Exception;
	
	Long CountBlogByType(Integer blogTypeid) throws Exception;
}
