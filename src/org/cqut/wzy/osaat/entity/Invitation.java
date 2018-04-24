package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class Invitation {
    private Long invitationId;

    private String invitationName;

    private Integer invitationSectionid;

    private Long invitationUserid;

    private String invitationTime;

    private Integer isEssence;

    private String lastreplyName;

    private String lastreplyTime;

    private String invitationContent;

    public Long getInvitationId() {
        return invitationId;
    }

    public void setInvitationId(Long invitationId) {
        this.invitationId = invitationId;
    }

    public String getInvitationName() {
        return invitationName;
    }

    public void setInvitationName(String invitationName) {
        this.invitationName = invitationName == null ? null : invitationName.trim();
    }

    public Integer getInvitationSectionid() {
        return invitationSectionid;
    }

    public void setInvitationSectionid(Integer invitationSectionid) {
        this.invitationSectionid = invitationSectionid;
    }

    public Long getInvitationUserid() {
        return invitationUserid;
    }

    public void setInvitationUserid(Long invitationUserid) {
        this.invitationUserid = invitationUserid;
    }

    public String getInvitationTime() {
        return invitationTime;
    }

    public void setInvitationTime(String invitationTime) {
        this.invitationTime = invitationTime;
    }

    public Integer getIsEssence() {
        return isEssence;
    }

    public void setIsEssence(Integer isEssence) {
        this.isEssence = isEssence;
    }

    public String getLastreplyName() {
        return lastreplyName;
    }

    public void setLastreplyName(String lastreplyName) {
        this.lastreplyName = lastreplyName == null ? null : lastreplyName.trim();
    }

    public String getLastreplyTime() {
        return lastreplyTime;
    }

    public void setLastreplyTime(String lastreplyTime) {
        this.lastreplyTime = lastreplyTime;
    }

    public String getInvitationContent() {
        return invitationContent;
    }

    public void setInvitationContent(String invitationContent) {
        this.invitationContent = invitationContent == null ? null : invitationContent.trim();
    }
}