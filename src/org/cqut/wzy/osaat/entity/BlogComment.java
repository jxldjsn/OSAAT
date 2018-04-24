package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class BlogComment {
    private Long blogCommentid;

    private Long commentBlogUser;

    private Long commentBlogId;

    private String commentTime;

    private String commentContent;

    public Long getBlogCommentid() {
        return blogCommentid;
    }

    public void setBlogCommentid(Long blogCommentid) {
        this.blogCommentid = blogCommentid;
    }

    public Long getCommentBlogUser() {
        return commentBlogUser;
    }

    public void setCommentBlogUser(Long commentBlogUser) {
        this.commentBlogUser = commentBlogUser;
    }

    public Long getCommentBlogId() {
        return commentBlogId;
    }

    public void setCommentBlogId(Long commentBlogId) {
        this.commentBlogId = commentBlogId;
    }

    public String getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(String commentTime) {
        this.commentTime = commentTime;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent == null ? null : commentContent.trim();
    }
}