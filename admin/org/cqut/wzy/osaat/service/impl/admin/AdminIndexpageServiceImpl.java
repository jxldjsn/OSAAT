package org.cqut.wzy.osaat.service.impl.admin;

import java.util.List;

import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.mapper.admin.AdminIndexpageMapper;
import org.cqut.wzy.osaat.mapper.admin.AdminUserMapper;
import org.cqut.wzy.osaat.service.admin.AdminIndexpageService;
import org.springframework.beans.factory.annotation.Autowired;

public class AdminIndexpageServiceImpl implements AdminIndexpageService {
	
	@Autowired
	private AdminIndexpageMapper adminIndexpageMapper;
	
	/**
	 * <p>Title: CountAllIndexpage</p>
	 * <p>Description:统计主页面的数量 </p>
	 * @param 
	 * @return Long
	 * @throws Exception
	 */
	public Long CountAllIndexpage() throws Exception {
		return adminIndexpageMapper.CountAllIndexPage();
	}
	
	/**
	 * <p>Title: SearchAllIndexPage</p>
	 * <p>Description:获取所有的主页 </p>
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	public List<Indexpage> SearchAllIndexPage(Long startPage, Long pageSize) throws Exception {
		return adminIndexpageMapper.SearchAllIndexpage(startPage, pageSize);
	}
	
	/**
	 * <p>Title: AddIndexPage</p>
	 * <p>Description:添加页面 </p>
	 * @param Indexpage indexpage
	 * @return 
	 * @throws Exception
	 */
	public void AddIndexPage(Indexpage indexpage) throws Exception {
		adminIndexpageMapper.AddIndexPage(indexpage);
	}
	
	/**
	 * <p>Title: SelectIndexpageById</p>
	 * <p>Description:根据ID获取主页 </p>
	 * @param Long id
	 * @return Indexpage
	 * @throws Exception
	 */
	public Indexpage SelectIndexpageById(Long id) throws Exception {
		return adminIndexpageMapper.SelectIndexpageById(id);
	}
	
	/**
	 * <p>Title: UpdateIndexPage</p>
	 * <p>Description:更新主页信息 </p>
	 * @param Indexpage indexpage
	 * @return 
	 * @throws Exception
	 */
	public void UpdateIndexPage(Indexpage indexpage) throws Exception {
		adminIndexpageMapper.UpdateIndexPage(indexpage);
	}
	
	/**
	 * <p>Title: DeleteIndexpageById</p>
	 * <p>Description:根据ID删除主页信息 </p>
	 * @param Long id
	 * @return 
	 * @throws Exception
	 */
	public void DeleteIndexpageById(Long id) throws Exception {
		adminIndexpageMapper.DeleteIndexpageById(id);
	}
	
	/**
	 * <p>Title: ConntSearchIndexpageByTitle</p>
	 * <p>Description:统计搜索的主页面的数量 </p>
	 * @param String key
	 * @return Long
	 * @throws Exception
	 */
	public Long ConntSearchIndexpageByTitle(String key) throws Exception {
		return adminIndexpageMapper.ConntSearchIndexpageByTitle(key);
	}
	
	/**
	 * <p>Title: SearchIndexpageByTitle</p>
	 * <p>Description:获取搜索的所有主页 </p>
	 * @param String key
	 * @param Long startPage
	 * @param Long pageSize
	 * @return List<Indexpage>
	 * @throws Exception
	 */
	public List<Indexpage> SearchIndexpageByTitle(String key, Long startPage, Long pageSize) throws Exception {
		return adminIndexpageMapper.SearchIndexpageByTitle(key, startPage, pageSize);
	}
	
}

