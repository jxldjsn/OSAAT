package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.admin.News;

/**
 * 
 * <p>Title: AdminNewsService</p>
 * <p>Description:管理员管理资讯的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-4-28下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-4-28<br/>
 * 历史修订：<br/>
 */
public interface AdminNewsService {

	/**
	 * <p>Title: CountAllNews</p>
	 * <p>Description:统计所有的资讯的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllNews() throws Exception;
	
	/**
	 * <p>Title: SearchAllNews</p>
	 * <p>Description:获取所有的资讯 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<News>
	 * @throws Exception
	 */
	public List<News> SearchAllNews(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: AddNews</p>
	 * <p>Description:添加资讯</p>
	 * @param News news
	 * @return void
	 * @throws Exception
	 */
	public void AddNews(News news) throws Exception;
	
	
	/**
	 * <p>Title: SearchNewsById</p>
	 * <p>Description:根据Id获取资讯 </p>
	 * @param Long id
	 * @return News
	 * @throws Exception
	 */
	public News SearchNewsById(Long id) throws Exception;
	
	/**
	 * <p>Title: AlterNews</p>
	 * <p>Description:修改资讯</p>
	 * @param News news
	 * @return void
	 * @throws Exception
	 */
	public void AlterNews(News news) throws Exception;
	
	/**
	 * <p>Title: DeleteNews</p>
	 * <p>Description:删除资讯</p>
	 * @param Long id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteNews(Long id) throws Exception;
	
	
	/**
	 * <p>Title: CountSearchNews</p>
	 * <p>Description:统计搜索的资讯的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchNews(String key) throws Exception;
	
	/**
	 * <p>Title: SearchNewsByKey</p>
	 * <p>Description:获取通过关键字搜索的所有资讯 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<News>
	 * @throws Exception
	 */
	public List<News> SearchNewsByKey(String key, Long startPage, Long pageSize) throws Exception;
	
	
}
