package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;

public interface AdminBlogMapper {
	
	Long CountAllBlog() throws Exception;
	
	List<Blog> SearchAllBlog(Long startPage, Long pageSize) throws Exception;

	Long ConntSearchBlogByTitle(String title) throws Exception;
	
	List<Blog> SearchBlogByTitle(String title, Long startPage, Long pageSize) throws Exception;
	
	void DeleteBlogById(Long blogId) throws Exception;
	
	List<BlogType> SearchAllBlogType() throws Exception;
	
	void AlterBlogType(BlogType blogType) throws Exception;
	
	void AddBlogType(BlogType blogType) throws Exception;
	
	/*void DeleteBlogType(Integer blogid) throws Exception;*/
	
	Long CountAllBlogComment() throws Exception;
	
	List<BlogComment> GetAllBlogComment(Long startPage, Long pageSize) throws Exception;
	
	void DeleteBlogComment(Long commentid) throws Exception;
	
	Long CountSearchComment(@Param("commentid")Long commentid, @Param("userid")Long userid, @Param("blogid")Long blogid) throws Exception;
	
	List<BlogComment> SearchComment(@Param("commentid")Long commentid, @Param("userid")Long userid, @Param("blogid")Long blogid, @Param("startPage")Long startPage, @Param("pageSize")Long pageSize) throws Exception;
}
