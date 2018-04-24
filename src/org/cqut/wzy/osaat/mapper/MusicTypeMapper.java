package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.MusicType;
import org.cqut.wzy.osaat.entity.MusicTypeExample;

public interface MusicTypeMapper {
    int countByExample(MusicTypeExample example);

    int deleteByExample(MusicTypeExample example);

    int deleteByPrimaryKey(Integer typeId);

    int insert(MusicType record);

    int insertSelective(MusicType record);

    List<MusicType> selectByExample(MusicTypeExample example);

    MusicType selectByPrimaryKey(Integer typeId);

    int updateByExampleSelective(@Param("record") MusicType record, @Param("example") MusicTypeExample example);

    int updateByExample(@Param("record") MusicType record, @Param("example") MusicTypeExample example);

    int updateByPrimaryKeySelective(MusicType record);

    int updateByPrimaryKey(MusicType record);
}