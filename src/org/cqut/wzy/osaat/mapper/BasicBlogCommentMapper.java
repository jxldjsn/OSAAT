package org.cqut.wzy.osaat.mapper;

import java.util.List;

import org.cqut.wzy.osaat.entity.view.BlogCommentView;

public interface BasicBlogCommentMapper {

    List<BlogCommentView> selectBlogCommentByBlogId(Long blogId) throws Exception;
    
    void PriseBlog(Long blogId) throws Exception;
    
}