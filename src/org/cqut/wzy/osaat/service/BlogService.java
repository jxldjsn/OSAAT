package org.cqut.wzy.osaat.service;

import java.util.List;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.view.BlogCommentView;
import org.cqut.wzy.osaat.entity.view.IndexBlogBroadsideView;
import org.cqut.wzy.osaat.entity.view.IndexBlogView;

/**
 * 
 * <p>Title: BlogService</p>
 * <p>Description:博客基础service </p>
 * <p>Company: WZY社区</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2016-6-23下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2016-1-23<br/>
 * 历史修订：<br/>
 */
public interface BlogService {
	
	/**
	 * <p>Title: CountBlog</p>
	 * <p>Description:统计博客的总数量</p>
	 * @param 
	 * @return countnumber
	 * @throws Exception
	 */
	public long CountBlog() throws Exception;
	
	/**
	 * <p>Title: SelectAllBlogType</p>
	 * <p>Description:获取所有的博客类型 </p>
	 * @param 
	 * @return List<BlogType>
	 * @throws Exception
	 */
	public List<BlogType> SelectAllBlogType() throws Exception;
	
	
	/**
	 * <p>Title: SearchAllBlog</p>
	 * <p>Description:获取分页后的博客 </p>
	 * @param startPage 开始的页面
	 * @param pageSize 页面的长度
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	public List<IndexBlogView> SearchAllBlog(Long startPage, Long pageSize) throws Exception; 

	
	/**
	 * <p>Title: SearchNumNewBlog</p>
	 * <p>Description:获取最新的num（数量）个博客的相关信息</p>
	 * @param num 获取最新博客的数量
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	public List<IndexBlogBroadsideView> SearchNumNewBlog(int num) throws Exception;
	
	/**
	 * <p>Title: SearchNumHotBrowseBlog</p>
	 * <p>Description:获取浏览最多的前num（数量）个博客的相关信息 </p>
	 * @param num 获取浏览最多的博客的数量
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	public List<IndexBlogBroadsideView> SearchNumHotBrowseBlog(int num) throws Exception;
	
	/**
	 * <p>Title: SearchNumHotPraiseBlog</p>
	 * <p>Description:获取点赞最多的前num（数量）个博客的相关信息 </p>
	 * @param num 获取点赞最多的博客的数量
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	public List<IndexBlogBroadsideView> SearchNumHotPraiseBlog(int num) throws Exception;
	
	/**
	 * <p>Title: SerachNumTypeBlog</p>
	 * <p>Description:根据博客类型获取前num（数量）个博客的相关信息 </p>
	 * @param type 博客的类型
	 * @param num 获取的博客的数量
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	public List<IndexBlogBroadsideView> SerachNumTypeBlog(int type,int num) throws Exception;
	
	/**
	 * <p>Title: SearchAllBlog</p>
	 * <p>Description:获取所有博客 </p>
	 * @param 
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
//	public List<IndexBlogView> SearchAllBlog() throws Exception;
	
	/**
	 * <p>Title: AddBlog</p>
	 * <p>Description:持久化用户博客 </p>
	 * @param Blog 用户博客
	 * @return void
	 * @throws Exception
	 */
	public void AddBlog(Blog blog) throws Exception;
	
	
	
	/**
	 * <p>Title: SelectBlogById</p>
	 * <p>Description:通过博客Id获取博客 </p>
	 * @param blogId
	 * @return Blog
	 * @throws Exception
	 */
	public Blog SelectBlogById(Long blogId) throws Exception;
	
	/**
	 * <p>Title: SelectUserNameById</p>
	 * <p>Description:通过用户Id获取用户名字 </p>
	 * @param userId
	 * @return String
	 * @throws Exception
	 */
	public String SelectUserNameById(Long userId) throws Exception;
	
	/**
	 * <p>Title: SelectBlogTypeById</p>
	 * <p>Description:通过博客类型Id获取博客类型 </p>
	 * @param blogTypeId
	 * @return BlogType
	 * @throws Exception
	 */
	public BlogType SelectBlogTypeById(int blogTypeId) throws Exception;
	
	/**
	 * <p>Title: SelectBlogCommentViewByBlogId</p>
	 * <p>Description:通过博客Id获取该博客的所有评论 </p>
	 * @param blogId
	 * @return List<BlogCommentView>
	 * @throws Exception
	 */
	public List<BlogCommentView> SelectBlogCommentViewByBlogId(Long blogId) throws Exception;
	
	/**
	 * <p>Title: PriseBlog</p>
	 * <p>Description:通过博客Id给该博客点赞</p>
	 * @param blogId
	 * @return 
	 * @throws Exception
	 */
	public void PriseBlog(Long blogId) throws Exception;
	
	/**
	 * <p>Title: InserBlogComment</p>
	 * <p>Description:插入用户对博客的评论</p>
	 * @param BlogComment
	 * @return 
	 * @throws Exception
	 */
	public void InserBlogComment(BlogComment blogComment) throws Exception;
	
	/**
	 * <p>Title: SearchBlogByUserId</p>
	 * <p>Description:用户查看自己的博客</p>
	 * @param userid
	 * @return List<Blog>
	 * @throws Exception
	 */
	public List<Blog> SearchBlogByUserId(Long userId, Long startPage, Long pageSize) throws Exception;

	/**
	 * <p>Title: DeleteBlogById</p>
	 * <p>Description:根据博客Id删除博客</p>
	 * @param blogid
	 * @return 
	 * @throws Exception
	 */
	public void DeleteBlogById(Long blogid) throws Exception;
	
	/**
	 * <p>Title: UpdateBlog</p>
	 * <p>Description:更新用户博客</p>
	 * @param blog
	 * @return 
	 * @throws Exception
	 */
	public void UpdateBlog(Blog blog) throws Exception;
	
	
	/**
	 * <p>Title: SelectByBlogTitle</p>
	 * <p>Description:根据关键字获取博客 </p>
	 * @param String title
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	public List<IndexBlogView> SelectByBlogTitle(String title, Long startPage, Long pageSize) throws Exception; 
	
	/**
	 * <p>Title: SelectBlogByType</p>
	 * <p>Description:根据博客类型获取博客 </p>
	 * @param Integer typeId
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	public List<IndexBlogView> SelectBlogByType(Integer typeId, Long startPage, Long pageSize) throws Exception; 
	
	/**
	 * <p>Title: CountBlogByUserId</p>
	 * <p>Description:根据用户Id获取博客 </p>
	 * @param Long userId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByUserId(Long userId) throws Exception;
	
	
	/**
	 * <p>Title: CountBlogByTitleKey</p>
	 * <p>Description:根据用户输入的关键字获取博客总数 </p>
	 * @param String blogkey
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByTitleKey(String blogkey) throws Exception;
	
	/**
	 * <p>Title: CountBlogByType</p>
	 * <p>Description:根据博客类型获取博客数量 </p>
	 * @param Integer blogTypeid
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByType(Integer blogTypeid) throws Exception;
	

}
