package org.cqut.wzy.osaat.entity.view;

public class SectionView {

	private Integer sectionId;
	private String sectionName;
	private Integer todysInvitation;
	private Long countSectionInvitation;
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
		this.sectionName = sectionName;
	}
	public Integer getTodysInvitation() {
		return todysInvitation;
	}
	public void setTodysInvitation(Integer todysInvitation) {
		this.todysInvitation = todysInvitation;
	}
	public Long getCountSectionInvitation() {
		return countSectionInvitation;
	}
	public void setCountSectionInvitation(Long countSectionInvitation) {
		this.countSectionInvitation = countSectionInvitation;
	}
}
