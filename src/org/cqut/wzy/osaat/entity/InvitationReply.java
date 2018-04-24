package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class InvitationReply {
    private Long replyId;

    private String replyTime;

    private Long invitationid;

    private Long replyUserId;

    private String replyContent;

    public Long getReplyId() {
        return replyId;
    }

    public void setReplyId(Long replyId) {
        this.replyId = replyId;
    }

    public String getReplyTime() {
        return replyTime;
    }

    public void setReplyTime(String replyTime) {
        this.replyTime = replyTime;
    }

    public Long getInvitationid() {
        return invitationid;
    }

    public void setInvitationid(Long invitationid) {
        this.invitationid = invitationid;
    }

    public Long getReplyUserId() {
        return replyUserId;
    }

    public void setReplyUserId(Long replyUserId) {
        this.replyUserId = replyUserId;
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent == null ? null : replyContent.trim();
    }
}