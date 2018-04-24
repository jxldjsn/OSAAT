package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class Indexpage {
    private Long indexpageId;

    private String title;

    private String image;

    private String sourceUrl;

    private Integer sourceType;

    private String indexAbstract;

    private String editorPeople;

    private String editorTime;

    public Long getIndexpageId() {
        return indexpageId;
    }

    public void setIndexpageId(Long indexpageId) {
        this.indexpageId = indexpageId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image == null ? null : image.trim();
    }

    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl == null ? null : sourceUrl.trim();
    }

    public Integer getSourceType() {
        return sourceType;
    }

    public void setSourceType(Integer sourceType) {
        this.sourceType = sourceType;
    }

    public String getIndexAbstract() {
        return indexAbstract;
    }

    public void setIndexAbstract(String indexAbstract) {
        this.indexAbstract = indexAbstract == null ? null : indexAbstract.trim();
    }

    public String getEditorPeople() {
        return editorPeople;
    }

    public void setEditorPeople(String editorPeople) {
        this.editorPeople = editorPeople == null ? null : editorPeople.trim();
    }

    public String getEditorTime() {
        return editorTime;
    }

    public void setEditorTime(String editorTime) {
        this.editorTime = editorTime;
    }
}