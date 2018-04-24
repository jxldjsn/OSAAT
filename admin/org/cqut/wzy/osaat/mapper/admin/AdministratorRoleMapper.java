package org.cqut.wzy.osaat.mapper.admin;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.admin.AdministratorRole;
import org.cqut.wzy.osaat.entity.admin.AdministratorRoleExample;

public interface AdministratorRoleMapper {
    int countByExample(AdministratorRoleExample example);

    int deleteByExample(AdministratorRoleExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(AdministratorRole record);

    int insertSelective(AdministratorRole record);

    List<AdministratorRole> selectByExample(AdministratorRoleExample example);

    AdministratorRole selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AdministratorRole record, @Param("example") AdministratorRoleExample example);

    int updateByExample(@Param("record") AdministratorRole record, @Param("example") AdministratorRoleExample example);

    int updateByPrimaryKeySelective(AdministratorRole record);

    int updateByPrimaryKey(AdministratorRole record);
}