package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.BlogType;
import org.cqut.wzy.osaat.entity.BlogTypeExample;

public interface BlogTypeMapper {
    int countByExample(BlogTypeExample example);

    int deleteByExample(BlogTypeExample example);

    int deleteByPrimaryKey(Integer blogTypeid);

    int insert(BlogType record);

    int insertSelective(BlogType record);

    List<BlogType> selectByExample(BlogTypeExample example);

    BlogType selectByPrimaryKey(Integer blogTypeid);

    int updateByExampleSelective(@Param("record") BlogType record, @Param("example") BlogTypeExample example);

    int updateByExample(@Param("record") BlogType record, @Param("example") BlogTypeExample example);

    int updateByPrimaryKeySelective(BlogType record);

    int updateByPrimaryKey(BlogType record);
}