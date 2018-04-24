package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.admin.News;
import org.cqut.wzy.osaat.mapper.admin.AdminNewsMapper;
import org.cqut.wzy.osaat.mapper.admin.NewsMapper;
import org.cqut.wzy.osaat.service.admin.AdminNewsService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminNewsServiceImpl implements AdminNewsService {
	
	@Autowired
	private AdminNewsMapper adminNewsMapper;
	
	@Autowired
	private NewsMapper newsMapper;

	/**
	 * <p>Title: CountAllNews</p>
	 * <p>Description:统计所有的资讯的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllNews() throws Exception {
		return adminNewsMapper.CountAllNews();
	}
	
	/**
	 * <p>Title: SearchAllNews</p>
	 * <p>Description:获取所有的资讯 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<News>
	 * @throws Exception
	 */
	public List<News> SearchAllNews(Long startPage, Long pageSize) throws Exception {
		return adminNewsMapper.SearchAllNews(startPage, pageSize);
	}
	
	/**
	 * <p>Title: AddNews</p>
	 * <p>Description:添加资讯</p>
	 * @param News news
	 * @return void
	 * @throws Exception
	 */
	public void AddNews(News news) throws Exception {
		newsMapper.insert(news);
	}
	
	/**
	 * <p>Title: SearchNewsById</p>
	 * <p>Description:根据Id获取资讯 </p>
	 * @param Long id
	 * @return News
	 * @throws Exception
	 */
	public News SearchNewsById(Long id) throws Exception {
		return newsMapper.selectByPrimaryKey(id);
	}
	
	/**
	 * <p>Title: AlterNews</p>
	 * <p>Description:修改资讯</p>
	 * @param News news
	 * @return void
	 * @throws Exception
	 */
	public void AlterNews(News news) throws Exception {
		newsMapper.updateByPrimaryKeySelective(news);
	}
	
	/**
	 * <p>Title: DeleteNews</p>
	 * <p>Description:删除资讯</p>
	 * @param Long id
	 * @return void
	 * @throws Exception
	 */
	public void DeleteNews(Long id) throws Exception {
		newsMapper.deleteByPrimaryKey(id);
	}
	
	/**
	 * <p>Title: CountSearchNews</p>
	 * <p>Description:统计搜索的资讯的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long CountSearchNews(String key) throws Exception {
		return adminNewsMapper.CountAllSearchNews(key);
	}
	
	/**
	 * <p>Title: SearchNewsByKey</p>
	 * <p>Description:获取通过关键字搜索的所有资讯 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<News>
	 * @throws Exception
	 */
	public List<News> SearchNewsByKey(String key, Long startPage, Long pageSize) throws Exception {
		return adminNewsMapper.SearchNewsByKey(key, startPage, pageSize);
	}
	
}
