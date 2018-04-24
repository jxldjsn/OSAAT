package org.cqut.wzy.osaat.entity.view;

public class DetailInvitationView {
	private Long invitationId;
	private String userPhoto;
	private String username;
	private Integer userIntegral;
	private String invitationTime;
	private String invitationName;
	private String invitationContent;
	
	public Long getInvitationId() {
		return invitationId;
	}
	public void setInvitationId(Long invitationId) {
		this.invitationId = invitationId;
	}
	public String getUserPhoto() {
		return userPhoto;
	}
	public void setUserPhoto(String userPhoto) {
		this.userPhoto = userPhoto;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getInvitationTime() {
		return invitationTime;
	}
	public void setInvitationTime(String invitationTime) {
		this.invitationTime = invitationTime;
	}
	public String getInvitationName() {
		return invitationName;
	}
	public void setInvitationName(String invitationName) {
		this.invitationName = invitationName;
	}
	public String getInvitationContent() {
		return invitationContent;
	}
	public void setInvitationContent(String invitationContent) {
		this.invitationContent = invitationContent;
	}
	public Integer getUserIntegral() {
		return userIntegral;
	}
	public void setUserIntegral(Integer userIntegral) {
		this.userIntegral = userIntegral;
	}
	
}
