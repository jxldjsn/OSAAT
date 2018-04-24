package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.Indexpage;
import org.cqut.wzy.osaat.entity.IndexpageExample;

public interface IndexpageMapper {
    int countByExample(IndexpageExample example);

    int deleteByExample(IndexpageExample example);

    int deleteByPrimaryKey(Long indexpageId);

    int insert(Indexpage record);

    int insertSelective(Indexpage record);

    List<Indexpage> selectByExample(IndexpageExample example);

    Indexpage selectByPrimaryKey(Long indexpageId);

    int updateByExampleSelective(@Param("record") Indexpage record, @Param("example") IndexpageExample example);

    int updateByExample(@Param("record") Indexpage record, @Param("example") IndexpageExample example);

    int updateByPrimaryKeySelective(Indexpage record);

    int updateByPrimaryKey(Indexpage record);
}