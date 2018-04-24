package org.cqut.wzy.osaat.entity.view;

public class IndexBlogView {

	private String photo;
	private String blogTitle;
	private String blogId;
	private String blogAbstract;
	private String createTime;
	private String blogType;
	private int blogPraise;
	private int blogComment;
	private int blogbrowse;
	
	public int getBlogComment() {
		return blogComment;
	}
	public void setBlogComment(int blogComment) {
		this.blogComment = blogComment;
	}
	public int getBlogbrowse() {
		return blogbrowse;
	}
	public void setBlogbrowse(int blogbrowse) {
		this.blogbrowse = blogbrowse;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getBlogTitle() {
		return blogTitle;
	}
	public void setBlogTitle(String blogTitle) {
		this.blogTitle = blogTitle;
	}
	public String getBlogId() {
		return blogId;
	}
	public void setBlogId(String blogId) {
		this.blogId = blogId;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getBlogAbstract() {
		return blogAbstract;
	}
	public void setBlogAbstract(String blogAbstract) {
		this.blogAbstract = blogAbstract;
	}
	public String getBlogType() {
		return blogType;
	}
	public void setBlogType(String blogType) {
		this.blogType = blogType;
	}
	public int getBlogPraise() {
		return blogPraise;
	}
	public void setBlogPraise(int blogPraise) {
		this.blogPraise = blogPraise;
	}
}
