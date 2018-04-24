package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.GameType;
import org.cqut.wzy.osaat.entity.GameTypeExample;

public interface GameTypeMapper {
    int countByExample(GameTypeExample example);

    int deleteByExample(GameTypeExample example);

    int deleteByPrimaryKey(Integer typeId);

    int insert(GameType record);

    int insertSelective(GameType record);

    List<GameType> selectByExample(GameTypeExample example);

    GameType selectByPrimaryKey(Integer typeId);

    int updateByExampleSelective(@Param("record") GameType record, @Param("example") GameTypeExample example);

    int updateByExample(@Param("record") GameType record, @Param("example") GameTypeExample example);

    int updateByPrimaryKeySelective(GameType record);

    int updateByPrimaryKey(GameType record);
}