package org.cqut.wzy.osaat.entity;

public class InvitationSection {
    private Integer sectionId;

    private String sectionName;

    private String sectionIntroduce;

    public Integer getSectionId() {
        return sectionId;
    }

    public void setSectionId(Integer sectionId) {
        this.sectionId = sectionId;
    }

    public String getSectionName() {
        return sectionName;
    }

    public void setSectionName(String sectionName) {
        this.sectionName = sectionName == null ? null : sectionName.trim();
    }

    public String getSectionIntroduce() {
        return sectionIntroduce;
    }

    public void setSectionIntroduce(String sectionIntroduce) {
        this.sectionIntroduce = sectionIntroduce == null ? null : sectionIntroduce.trim();
    }
}