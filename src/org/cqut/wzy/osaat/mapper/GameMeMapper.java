package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.GameMe;
import org.cqut.wzy.osaat.entity.GameMeExample;

public interface GameMeMapper {
    int countByExample(GameMeExample example);

    int deleteByExample(GameMeExample example);

    int deleteByPrimaryKey(Long gameMeid);

    int insert(GameMe record);

    int insertSelective(GameMe record);

    List<GameMe> selectByExample(GameMeExample example);

    GameMe selectByPrimaryKey(Long gameMeid);

    int updateByExampleSelective(@Param("record") GameMe record, @Param("example") GameMeExample example);

    int updateByExample(@Param("record") GameMe record, @Param("example") GameMeExample example);

    int updateByPrimaryKeySelective(GameMe record);

    int updateByPrimaryKey(GameMe record);
}