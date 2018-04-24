package org.cqut.wzy.osaat.service.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.User;

/**
 * 
 * <p>Title: AdminIndexpageService</p>
 * <p>Description:管理员管理主页的基础service </p>
 * <p>Company: WZY</p> 
 * @author	wangzhiyong QQ:1366834931
 * @date	2017-3-18下午3:48:09
 * @version 
 * 版本号：100-000-000<br/>
 * 创建日期：2017-3-18<br/>
 * 历史修订：<br/>
 */
public interface AdminIndexpageService {
	
	/**
	 * <p>Title: CountAllIndexpage</p>
	 * <p>Description:统计主页面的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllIndexpage() throws Exception;
	
	/**
	 * <p>Title: SearchAllIndexPage</p>
	 * <p>Description:获取所有的主页 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	public List<Indexpage> SearchAllIndexPage(Long startPage, Long pageSize) throws Exception;
	
	/**
	 * <p>Title: AddIndexPage</p>
	 * <p>Description:添加页面 </p>
	 * @param Indexpage indexpage
	 * @return 
	 * @throws Exception
	 */
	public void AddIndexPage(Indexpage indexpage) throws Exception;
	
	/**
	 * <p>Title: SelectIndexpageById</p>
	 * <p>Description:根据ID获取主页 </p>
	 * @param Long id
	 * @return Indexpage
	 * @throws Exception
	 */
	public Indexpage SelectIndexpageById(Long id) throws Exception;
	
	/**
	 * <p>Title: UpdateIndexPage</p>
	 * <p>Description:更新主页信息 </p>
	 * @param Indexpage indexpage
	 * @return 
	 * @throws Exception
	 */
	public void UpdateIndexPage(Indexpage indexpage) throws Exception;
	
	/**
	 * <p>Title: DeleteIndexpageById</p>
	 * <p>Description:根据ID删除主页信息 </p>
	 * @param Long id
	 * @return 
	 * @throws Exception
	 */
	public void DeleteIndexpageById(Long id) throws Exception;
	
	/**
	 * <p>Title: ConntSearchIndexpageByTitle</p>
	 * <p>Description:统计搜索的主页面的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long ConntSearchIndexpageByTitle(String key) throws Exception;
	
	/**
	 * <p>Title: SearchIndexpageByTitle</p>
	 * <p>Description:获取搜索的所有主页 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	public List<Indexpage> SearchIndexpageByTitle(String key, Long startPage, Long pageSize) throws Exception;
	
}
