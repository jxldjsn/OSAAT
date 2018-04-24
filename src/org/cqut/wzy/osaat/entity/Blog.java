package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class Blog {
    private Long blogId;

    private String blogTitle;

    private String blogAbstract;

    private Long blogAuthorid;

    private Integer blogType;

    private String blogDate;

    private Integer blogPraise;

    private Double blogBrowse;

    private String blogContent;

    public Long getBlogId() {
        return blogId;
    }

    public void setBlogId(Long blogId) {
        this.blogId = blogId;
    }

    public String getBlogTitle() {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle == null ? null : blogTitle.trim();
    }

    public String getBlogAbstract() {
        return blogAbstract;
    }

    public void setBlogAbstract(String blogAbstract) {
        this.blogAbstract = blogAbstract == null ? null : blogAbstract.trim();
    }

    public Long getBlogAuthorid() {
        return blogAuthorid;
    }

    public void setBlogAuthorid(Long blogAuthorid) {
        this.blogAuthorid = blogAuthorid;
    }

    public Integer getBlogType() {
        return blogType;
    }

    public void setBlogType(Integer blogType) {
        this.blogType = blogType;
    }

    public String getBlogDate() {
        return blogDate;
    }

    public void setBlogDate(String blogDate) {
        this.blogDate = blogDate;
    }

    public Integer getBlogPraise() {
        return blogPraise;
    }

    public void setBlogPraise(Integer blogPraise) {
        this.blogPraise = blogPraise;
    }

    public Double getBlogBrowse() {
        return blogBrowse;
    }

    public void setBlogBrowse(Double blogBrowse) {
        this.blogBrowse = blogBrowse;
    }

    public String getBlogContent() {
        return blogContent;
    }

    public void setBlogContent(String blogContent) {
        this.blogContent = blogContent == null ? null : blogContent.trim();
    }
}