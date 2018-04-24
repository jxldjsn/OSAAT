package org.cqut.wzy.osaat.entity;

public class BlogType {
    private Integer blogTypeid;

    private String blogTypeName;

    public Integer getBlogTypeid() {
        return blogTypeid;
    }

    public void setBlogTypeid(Integer blogTypeid) {
        this.blogTypeid = blogTypeid;
    }

    public String getBlogTypeName() {
        return blogTypeName;
    }

    public void setBlogTypeName(String blogTypeName) {
        this.blogTypeName = blogTypeName == null ? null : blogTypeName.trim();
    }
}