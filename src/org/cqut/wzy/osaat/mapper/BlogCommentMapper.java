package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.BlogComment;
import org.cqut.wzy.osaat.entity.BlogCommentExample;

public interface BlogCommentMapper {
    int countByExample(BlogCommentExample example);

    int deleteByExample(BlogCommentExample example);

    int deleteByPrimaryKey(Long blogCommentid);

    int insert(BlogComment record);

    int insertSelective(BlogComment record);

    List<BlogComment> selectByExampleWithBLOBs(BlogCommentExample example);

    List<BlogComment> selectByExample(BlogCommentExample example);

    BlogComment selectByPrimaryKey(Long blogCommentid);

    int updateByExampleSelective(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByExample(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByPrimaryKeySelective(BlogComment record);

    int updateByPrimaryKeyWithBLOBs(BlogComment record);

    int updateByPrimaryKey(BlogComment record);
}