package org.cqut.wzy.osaat.service.impl;

import java.util.List;

import org.cqut.wzy.osaat.entity.Blog;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.view.BlogCommentView;
import org.cqut.wzy.osaat.entity.view.IndexBlogBroadsideView;
import org.cqut.wzy.osaat.entity.view.IndexBlogView;
import org.cqut.wzy.osaat.mapper.BasicBlogCommentMapper;
import org.cqut.wzy.osaat.mapper.BasicBlogMapper;
import org.cqut.wzy.osaat.mapper.BlogMapper;
import org.cqut.wzy.osaat.mapper.BlogTypeMapper;
import org.cqut.wzy.osaat.mapper.BlogCommentMapper;
import org.cqut.wzy.osaat.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * 
 * <p>
 * Title: BlogServiceImpl
 * </p>
 * <p>
 * Description:博客基础服务管理
 * </p>
 * <p>
 * Company: WZY社区
 * </p>
 * 
 * @author wangzhiyong QQ:1366834931
 * @date 2016-6-19下午3:48:09
 * @version 版本号：100-000-000<br/>
 *          创建日期：2015-11-23<br/>
 *          历史修订：<br/>
 */
public class BlogServiceImpl implements BlogService {

	@Autowired
	private BasicBlogMapper basicBlogMapper;
	
	@Autowired
	private BlogMapper blogMapper;
	
	@Autowired
	private BlogTypeMapper blogTypeMapper;
	
	@Autowired
	private BlogCommentMapper BlogCommentMapper;
	
	@Autowired
	private BasicBlogCommentMapper basicBlogCommentMapper;
	
	
	/**
	 * <p>Title: CountBlog</p>
	 * <p>Description:统计博客的总数量</p>
	 * @param 
	 * @return countnumber
	 * @throws Exception
	 */
	@Override
	public long CountBlog() throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.CountBlog();
	}
	
	/**
	 * <p>
	 * Title: SelectAllBlogType
	 * </p>
	 * <p>
	 * Description:获取所有的博客类型
	 * </p>
	 * @param 
	 * @return List<BlogType> 
	 * @throws Exception
	 */
	@Override
	public List<BlogType> SelectAllBlogType() throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SelectAllBlogType();
	}


	/**
	 * <p>Title: SearchAllBlog</p>
	 * <p>Description:获取分页后的博客 </p>
	 * @param startPage， pageSize
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogView> SearchAllBlog(Long startPage, Long pageSize) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SelectAllBlog(startPage, pageSize);
	}
	
	/**
	 * <p>
	 * Title: SearchNumNewBlog
	 * </p>
	 * <p>
	 * Description:查找最新的num个博客的相关信息
	 * </p>
	 * @param num
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogBroadsideView> SearchNumNewBlog(int num) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SearchNumNewBlog(num);
	}


	/**
	 * <p>
	 * Title: SearchNumHotBrowseBlog
	 * </p>
	 * <p>
	 * Description:查找浏览量最多的num个博客的相关信息
	 * </p>
	 * @param num
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogBroadsideView> SearchNumHotBrowseBlog(int num) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SearchNumHotBrowseBlog(num);
	}
	
	/**
	 * <p>
	 * Title: SearchNumHotPraiseBlog
	 * </p>
	 * <p>
	 * Description:查找点赞量最多的num个博客的相关信息
	 * </p>
	 * @param num
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogBroadsideView> SearchNumHotPraiseBlog(int num) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SearchNumHotPraiseBlog(num);
	}
	
	/**
	 * <p>
	 * Title: SearchNumHotPraiseBlog
	 * </p>
	 * <p>
	 * Description:查找点赞量最多的num个博客的相关信息
	 * </p>
	 * @param type
	 * @param num
	 * @return List<IndexBlogBroadsideView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogBroadsideView> SerachNumTypeBlog(int type,int num) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SerachNumTypeBlog(type,num);
	}


	/**
	 * <p>
	 * Title: SearchAllBlog
	 * </p>
	 * <p>
	 * Description:查找所有博客
	 * </p>
	 * @param 
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
//	@Override
//	public List<IndexBlogView> SearchAllBlog() throws Exception {
//		// TODO Auto-generated method stub
//		return basicBlogMapper.SearchAllBlog();
//	}


	/**
	 * <p>
	 * Title: AddBlog
	 * </p>
	 * <p>
	 * Description:持久化用户博客
	 * </p>
	 * @param Blog 博客
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void AddBlog(Blog blog) throws Exception {
		// TODO Auto-generated method stub
		blogMapper.insert(blog);
	}



	/**
	 * <p>
	 * Title: SelectBlogById
	 * </p>
	 * <p>
	 * Description:通过博客Id获取博客
	 * </p>
	 * @param blogId
	 * @return Blog 
	 * @throws Exception
	 */
	@Override
	public Blog SelectBlogById(Long blogId) throws Exception {
		// TODO Auto-generated method stub
		return blogMapper.selectByPrimaryKey(blogId);
	}
	
	/**
	 * <p>Title: SelectUserNameById</p>
	 * <p>Description:通过用户Id获取用户名字 </p>
	 * @param userId
	 * @return String
	 * @throws Exception
	 */
	public String SelectUserNameById(Long userId) throws Exception {
		
		return basicBlogMapper.SelectUserNameById(userId);
		
		
	}

	/**
	 * <p>
	 * Title: SelectBlogTypeById
	 * </p>
	 * <p>
	 * Description:通过博客类型Id获取博客类型
	 * </p>
	 * @param blogTypeId
	 * @return BlogType 
	 * @throws Exception
	 */
	@Override
	public BlogType SelectBlogTypeById(int blogTypeId) throws Exception {
		// TODO Auto-generated method stub
		return blogTypeMapper.selectByPrimaryKey(blogTypeId);
	}

	/**
	 * <p>Title: SelectBlogCommentViewByBlogId</p>
	 * <p>Description:通过博客Id获取该博客的所有评论 </p>
	 * @param blogId
	 * @return List<BlogCommentView>
	 * @throws Exception
	 */
	@Override
	public List<BlogCommentView> SelectBlogCommentViewByBlogId(Long blogId) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogCommentMapper.selectBlogCommentByBlogId(blogId);
	}

	/**
	 * <p>Title: PriseBlog</p>
	 * <p>Description:通过博客Id给该博客点赞</p>
	 * @param blogId
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void PriseBlog(Long blogId) throws Exception {
		// TODO Auto-generated method stub
		basicBlogCommentMapper.PriseBlog(blogId);
	}

	/**
	 * <p>Title: InserBlogComment</p>
	 * <p>Description:插入用户对博客的评论</p>
	 * @param BlogComment
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void InserBlogComment(BlogComment blogComment) throws Exception {
		// TODO Auto-generated method stub
		BlogCommentMapper.insertSelective(blogComment);
	}

	/**
	 * <p>Title: SearchBlogByUserId</p>
	 * <p>Description:用户查看自己的博客</p>
	 * @param userid
	 * @return List<Blog>
	 * @throws Exception
	 */
	@Override
	public List<Blog> SearchBlogByUserId(Long userId, Long startPage, Long pageSize) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SearchBlogByUserId(userId, startPage, pageSize);
	}

	/**
	 * <p>Title: DeleteBlogById</p>
	 * <p>Description:根据博客Id删除博客</p>
	 * @param blogid
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void DeleteBlogById(Long blogid) throws Exception {
		// TODO Auto-generated method stub
		blogMapper.deleteByPrimaryKey(blogid);
	}

	/**
	 * <p>Title: UpdateBlog</p>
	 * <p>Description:更新用户博客</p>
	 * @param blog
	 * @return 
	 * @throws Exception
	 */
	@Override
	public void UpdateBlog(Blog blog) throws Exception {
		// TODO Auto-generated method stub
		blogMapper.updateByPrimaryKeySelective(blog);
	}



	

	/**
	 * <p>Title: SelectByBlogTitle</p>
	 * <p>Description:根据关键字获取博客 </p>
	 * @param String title
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogView> SelectByBlogTitle(String title, Long startPage, Long pageSize) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SelectByBlogTitle(title, startPage, pageSize);
	}
	
	/**
	 * <p>Title: SelectBlogByType</p>
	 * <p>Description:根据博客类型获取博客 </p>
	 * @param Integer typeId
	 * @return List<IndexBlogView>
	 * @throws Exception
	 */
	@Override
	public List<IndexBlogView> SelectBlogByType(Integer typeId, Long startPage, Long pageSize) throws Exception {
		// TODO Auto-generated method stub
		return basicBlogMapper.SelectBlogByType(typeId, startPage, pageSize);
	}
	
	/**
	 * <p>Title: CountBlogByUserId</p>
	 * <p>Description:根据用户Id获取博客 </p>
	 * @param Long userId
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByUserId(Long userId) throws Exception {
		return basicBlogMapper.CountBlogByUserId(userId);
	}
	
	/**
	 * <p>Title: CountBlogByTitleKey</p>
	 * <p>Description:根据用户输入的关键字获取博客总数 </p>
	 * @param String blogkey
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByTitleKey(String blogkey) throws Exception {
		return basicBlogMapper.CountBlogByTitleKey(blogkey);
	}
	
	/**
	 * <p>Title: CountBlogByType</p>
	 * <p>Description:根据博客类型获取博客数量 </p>
	 * @param Integer blogTypeid
	 * @return Long
	 * @throws Exception
	 */
	public Long CountBlogByType(Integer blogTypeid) throws Exception {
		return basicBlogMapper.CountBlogByType(blogTypeid);
	}

}
