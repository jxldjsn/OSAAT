package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;

/**
 * 
 * <p>Title: AdminBlogService</p>
 * <p>Description:管理员管理博客的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-18下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-19<br/>
 * 历史修订：<br/>
 */
public interface AdminBlogService {
	
	/**
	 * <p>Title: CountAllBlog</p>
	 * <p>Description:统计所有的博客的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllBlog() throws Exception;

	/**
	 * <p>Title: SearchAllBlog</p>
	 * <p>Description:获取所有的博客 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Blog>
	 * @throws Exception
	 */
	public List<Blog> SearchAllBlog(Long startPage, Long pageSize) throws Exception;

	/**
	 * <p>Title: ConntSearchBlogByTitle</p>
	 * <p>Description:统计搜索的博客的数量 </p>
	 * @param String title
	 * @return Long
	 * @throws Exception
	 */
	public Long ConntSearchBlogByTitle(String title) throws Exception;
	
	/**
	 * <p>Title: SearchIndexpageByTitle</p>
	 * <p>Description:获取搜索的所有博客 </p>
	 * @param String title
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Blog>
	 * @throws Exception
	 */
	public List<Blog> SearchBlogByTitle(String title, Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteBlogById</p>
	 * <p>Description:根据博客Id删除博客 </p>
	 * @param Long blogId
	 * @return 
	 * @throws Exception
	 */
	public void DeleteBlogById(Long blogId) throws Exception;
	
	/**
	 * <p>Title: SearchAllBlogType</p>
	 * <p>Description:获取所有的博客类型 </p>
	 * @param 
	 * @return List<BlogType>
	 * @throws Exception
	 */
	public List<BlogType> SearchAllBlogType() throws Exception;

	
	/**
	 * <p>Title: AlterBlogType</p>
	 * <p>Description:修改博客类型 </p>
	 * @param BlogType blogType
	 * @return 
	 * @throws Exception
	 */
	public void AlterBlogType(BlogType blogType) throws Exception;
	
	/**
	 * <p>Title: AddBlogType</p>
	 * <p>Description:添加博客类型 </p>
	 * @param BlogType blogType
	 * @return 
	 * @throws Exception
	 */
	public void AddBlogType(BlogType blogType) throws Exception;
	
	/**
	 * <p>Title: DeleteBlogType</p>
	 * <p>Description:通过ID删除博客类型 </p>
	 * @param Integer blogid
	 * @return 
	 * @throws Exception
	 */
	/*public void DeleteBlogType(Integer blogid) throws Exception;*/
	
	/**
	 * <p>Title: CountAllBlogComment</p>
	 * <p>Description:统计所有的博客评论的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllBlogComment() throws Exception;
	
	/**
	 * <p>Title: GetAllBlogComment</p>
	 * <p>Description:获取所有的博客评论 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<BlogComment>
	 * @throws Exception
	 */
	public List<BlogComment> GetAllBlogComment(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: DeleteBlogComment</p>
	 * <p>Description:删除博客评论 </p>
	 * @param Long commentid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteBlogComment(Long commentid) throws Exception;
	
	/**
	 * <p>Title: CountSearchComment</p>
	 * <p>Description:统计搜索到的博客评论的数量 </p>
	 * @param Long commentid
	 * @param Long userid
	 * @param Long blogid
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchComment(Long commentid, Long userid, Long blogid) throws Exception;

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
	public List<BlogComment> SearchComment(Long commentid, Long userid, Long blogid, Long startPage, Long pageSize) throws Exception;

}
