package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.mapper.admin.AdminBlogMapper;
import org.cqut.wzy.osaat.mapper.admin.AdminIndexpageMapper;
import org.cqut.wzy.osaat.service.admin.AdminBlogService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminBlogServiceImpl implements AdminBlogService {
	
	@Autowired
	private AdminBlogMapper adminBlogMapper;

	/**
	 * <p>Title: CountAllBlog</p>
	 * <p>Description:统计所有的博客的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllBlog() throws Exception {
		return adminBlogMapper.CountAllBlog();
	}

	/**
	 * <p>Title: SearchAllBlog</p>
	 * <p>Description:获取所有的博客 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Blog>
	 * @throws Exception
	 */
	public List<Blog> SearchAllBlog(Long startPage, Long pageSize) throws Exception {
		return adminBlogMapper.SearchAllBlog(startPage, pageSize);
	}
	
	/**
	 * <p>Title: ConntSearchBlogByTitle</p>
	 * <p>Description:统计搜索的博客的数量 </p>
	 * @param String title
	 * @return Long
	 * @throws Exception
	 */
	public Long ConntSearchBlogByTitle(String title) throws Exception {
		return adminBlogMapper.ConntSearchBlogByTitle(title);
	}
	
	/**
	 * <p>Title: SearchIndexpageByTitle</p>
	 * <p>Description:获取搜索的所有博客 </p>
	 * @param String title
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Blog>
	 * @throws Exception
	 */
	public List<Blog> SearchBlogByTitle(String title, Long startPage, Long pageSize) throws Exception {
		return adminBlogMapper.SearchBlogByTitle(title, startPage, pageSize);
	}
	
	/**
	 * <p>Title: DeleteBlogById</p>
	 * <p>Description:根据博客Id删除博客 </p>
	 * @param Long blogId
	 * @return 
	 * @throws Exception
	 */
	public void DeleteBlogById(Long blogId) throws Exception {
		adminBlogMapper.DeleteBlogById(blogId);
	}
	
	/**
	 * <p>Title: SearchAllBlogType</p>
	 * <p>Description:获取所有的博客类型 </p>
	 * @param 
	 * @return List<BlogType>
	 * @throws Exception
	 */
	public List<BlogType> SearchAllBlogType() throws Exception {
		return adminBlogMapper.SearchAllBlogType();
	}
	
	/**
	 * <p>Title: AlterBlogType</p>
	 * <p>Description:修改博客类型 </p>
	 * @param BlogType blogType
	 * @return 
	 * @throws Exception
	 */
	public void AlterBlogType(BlogType blogType) throws Exception {
		adminBlogMapper.AlterBlogType(blogType);
	}
	
	/**
	 * <p>Title: AddBlogType</p>
	 * <p>Description:添加博客类型 </p>
	 * @param BlogType blogType
	 * @return 
	 * @throws Exception
	 */
	public void AddBlogType(BlogType blogType) throws Exception {
		adminBlogMapper.AddBlogType(blogType);
	}
	
	/**
	 * <p>Title: DeleteBlogType</p>
	 * <p>Description:通过ID删除博客类型 </p>
	 * @param Integer blogid
	 * @return 
	 * @throws Exception
	 */
	/*public void DeleteBlogType(Integer blogid) throws Exception {
		adminBlogMapper.DeleteBlogType(blogid);
	}*/
	
	/**
	 * <p>Title: CountAllBlogComment</p>
	 * <p>Description:统计所有的博客评论的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllBlogComment() throws Exception {
		return adminBlogMapper.CountAllBlogComment();
	}
	
	/**
	 * <p>Title: GetAllBlogComment</p>
	 * <p>Description:获取所有的博客评论 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<BlogComment>
	 * @throws Exception
	 */
	public List<BlogComment> GetAllBlogComment(Long startPage, Long pageSize) throws Exception {
		return adminBlogMapper.GetAllBlogComment(startPage, pageSize);
	}
	
	/**
	 * <p>Title: DeleteBlogComment</p>
	 * <p>Description:删除博客评论 </p>
	 * @param Long commentid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteBlogComment(Long commentid) throws Exception {
		adminBlogMapper.DeleteBlogComment(commentid);
	}
	
	/**
	 * <p>Title: CountSearchComment</p>
	 * <p>Description:统计搜索到的博客评论的数量 </p>
	 * @param Long commentid
	 * @param Long userid
	 * @param Long blogid
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchComment(Long commentid, Long userid, Long blogid) throws Exception {
		return adminBlogMapper.CountSearchComment(commentid, userid, blogid);
	}

	/**
	 * <p>Title: SearchComment</p>
	 * <p>Description:获取搜索的所有的博客评论 </p>
	 * @param Long commentid
	 * @param Long userid
	 * @param Long blogid
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<BlogComment>
	 * @throws Exception
	 */
	public List<BlogComment> SearchComment(Long commentid, Long userid, Long blogid, Long startPage, Long pageSize) throws Exception {
		return adminBlogMapper.SearchComment(commentid, userid, blogid, startPage, pageSize);
	}

	
}
