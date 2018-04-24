package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class InvitationExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public InvitationExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andInvitationIdIsNull() {
            addCriterion("invitation_id is null");
            return (Criteria) this;
        }

        public Criteria andInvitationIdIsNotNull() {
            addCriterion("invitation_id is not null");
            return (Criteria) this;
        }

        public Criteria andInvitationIdEqualTo(Long value) {
            addCriterion("invitation_id =", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdNotEqualTo(Long value) {
            addCriterion("invitation_id <>", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdGreaterThan(Long value) {
            addCriterion("invitation_id >", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdGreaterThanOrEqualTo(Long value) {
            addCriterion("invitation_id >=", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdLessThan(Long value) {
            addCriterion("invitation_id <", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdLessThanOrEqualTo(Long value) {
            addCriterion("invitation_id <=", value, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdIn(List<Long> values) {
            addCriterion("invitation_id in", values, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdNotIn(List<Long> values) {
            addCriterion("invitation_id not in", values, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdBetween(Long value1, Long value2) {
            addCriterion("invitation_id between", value1, value2, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationIdNotBetween(Long value1, Long value2) {
            addCriterion("invitation_id not between", value1, value2, "invitationId");
            return (Criteria) this;
        }

        public Criteria andInvitationNameIsNull() {
            addCriterion("invitation_name is null");
            return (Criteria) this;
        }

        public Criteria andInvitationNameIsNotNull() {
            addCriterion("invitation_name is not null");
            return (Criteria) this;
        }

        public Criteria andInvitationNameEqualTo(String value) {
            addCriterion("invitation_name =", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameNotEqualTo(String value) {
            addCriterion("invitation_name <>", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameGreaterThan(String value) {
            addCriterion("invitation_name >", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameGreaterThanOrEqualTo(String value) {
            addCriterion("invitation_name >=", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameLessThan(String value) {
            addCriterion("invitation_name <", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameLessThanOrEqualTo(String value) {
            addCriterion("invitation_name <=", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameLike(String value) {
            addCriterion("invitation_name like", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameNotLike(String value) {
            addCriterion("invitation_name not like", value, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameIn(List<String> values) {
            addCriterion("invitation_name in", values, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameNotIn(List<String> values) {
            addCriterion("invitation_name not in", values, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameBetween(String value1, String value2) {
            addCriterion("invitation_name between", value1, value2, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationNameNotBetween(String value1, String value2) {
            addCriterion("invitation_name not between", value1, value2, "invitationName");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidIsNull() {
            addCriterion("invitation_sectionid is null");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidIsNotNull() {
            addCriterion("invitation_sectionid is not null");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidEqualTo(Integer value) {
            addCriterion("invitation_sectionid =", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidNotEqualTo(Integer value) {
            addCriterion("invitation_sectionid <>", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidGreaterThan(Integer value) {
            addCriterion("invitation_sectionid >", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidGreaterThanOrEqualTo(Integer value) {
            addCriterion("invitation_sectionid >=", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidLessThan(Integer value) {
            addCriterion("invitation_sectionid <", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidLessThanOrEqualTo(Integer value) {
            addCriterion("invitation_sectionid <=", value, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidIn(List<Integer> values) {
            addCriterion("invitation_sectionid in", values, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidNotIn(List<Integer> values) {
            addCriterion("invitation_sectionid not in", values, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidBetween(Integer value1, Integer value2) {
            addCriterion("invitation_sectionid between", value1, value2, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationSectionidNotBetween(Integer value1, Integer value2) {
            addCriterion("invitation_sectionid not between", value1, value2, "invitationSectionid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridIsNull() {
            addCriterion("invitation_userid is null");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridIsNotNull() {
            addCriterion("invitation_userid is not null");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridEqualTo(Long value) {
            addCriterion("invitation_userid =", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridNotEqualTo(Long value) {
            addCriterion("invitation_userid <>", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridGreaterThan(Long value) {
            addCriterion("invitation_userid >", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridGreaterThanOrEqualTo(Long value) {
            addCriterion("invitation_userid >=", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridLessThan(Long value) {
            addCriterion("invitation_userid <", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridLessThanOrEqualTo(Long value) {
            addCriterion("invitation_userid <=", value, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridIn(List<Long> values) {
            addCriterion("invitation_userid in", values, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridNotIn(List<Long> values) {
            addCriterion("invitation_userid not in", values, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridBetween(Long value1, Long value2) {
            addCriterion("invitation_userid between", value1, value2, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationUseridNotBetween(Long value1, Long value2) {
            addCriterion("invitation_userid not between", value1, value2, "invitationUserid");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeIsNull() {
            addCriterion("invitation_time is null");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeIsNotNull() {
            addCriterion("invitation_time is not null");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeEqualTo(Date value) {
            addCriterion("invitation_time =", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeNotEqualTo(Date value) {
            addCriterion("invitation_time <>", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeGreaterThan(Date value) {
            addCriterion("invitation_time >", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("invitation_time >=", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeLessThan(Date value) {
            addCriterion("invitation_time <", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeLessThanOrEqualTo(Date value) {
            addCriterion("invitation_time <=", value, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeIn(List<Date> values) {
            addCriterion("invitation_time in", values, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeNotIn(List<Date> values) {
            addCriterion("invitation_time not in", values, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeBetween(Date value1, Date value2) {
            addCriterion("invitation_time between", value1, value2, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andInvitationTimeNotBetween(Date value1, Date value2) {
            addCriterion("invitation_time not between", value1, value2, "invitationTime");
            return (Criteria) this;
        }

        public Criteria andIsEssenceIsNull() {
            addCriterion("is_essence is null");
            return (Criteria) this;
        }

        public Criteria andIsEssenceIsNotNull() {
            addCriterion("is_essence is not null");
            return (Criteria) this;
        }

        public Criteria andIsEssenceEqualTo(Integer value) {
            addCriterion("is_essence =", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceNotEqualTo(Integer value) {
            addCriterion("is_essence <>", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceGreaterThan(Integer value) {
            addCriterion("is_essence >", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceGreaterThanOrEqualTo(Integer value) {
            addCriterion("is_essence >=", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceLessThan(Integer value) {
            addCriterion("is_essence <", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceLessThanOrEqualTo(Integer value) {
            addCriterion("is_essence <=", value, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceIn(List<Integer> values) {
            addCriterion("is_essence in", values, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceNotIn(List<Integer> values) {
            addCriterion("is_essence not in", values, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceBetween(Integer value1, Integer value2) {
            addCriterion("is_essence between", value1, value2, "isEssence");
            return (Criteria) this;
        }

        public Criteria andIsEssenceNotBetween(Integer value1, Integer value2) {
            addCriterion("is_essence not between", value1, value2, "isEssence");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameIsNull() {
            addCriterion("lastreply_name is null");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameIsNotNull() {
            addCriterion("lastreply_name is not null");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameEqualTo(String value) {
            addCriterion("lastreply_name =", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameNotEqualTo(String value) {
            addCriterion("lastreply_name <>", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameGreaterThan(String value) {
            addCriterion("lastreply_name >", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameGreaterThanOrEqualTo(String value) {
            addCriterion("lastreply_name >=", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameLessThan(String value) {
            addCriterion("lastreply_name <", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameLessThanOrEqualTo(String value) {
            addCriterion("lastreply_name <=", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameLike(String value) {
            addCriterion("lastreply_name like", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameNotLike(String value) {
            addCriterion("lastreply_name not like", value, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameIn(List<String> values) {
            addCriterion("lastreply_name in", values, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameNotIn(List<String> values) {
            addCriterion("lastreply_name not in", values, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameBetween(String value1, String value2) {
            addCriterion("lastreply_name between", value1, value2, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyNameNotBetween(String value1, String value2) {
            addCriterion("lastreply_name not between", value1, value2, "lastreplyName");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeIsNull() {
            addCriterion("lastreply_time is null");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeIsNotNull() {
            addCriterion("lastreply_time is not null");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeEqualTo(Date value) {
            addCriterion("lastreply_time =", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeNotEqualTo(Date value) {
            addCriterion("lastreply_time <>", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeGreaterThan(Date value) {
            addCriterion("lastreply_time >", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("lastreply_time >=", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeLessThan(Date value) {
            addCriterion("lastreply_time <", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeLessThanOrEqualTo(Date value) {
            addCriterion("lastreply_time <=", value, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeIn(List<Date> values) {
            addCriterion("lastreply_time in", values, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeNotIn(List<Date> values) {
            addCriterion("lastreply_time not in", values, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeBetween(Date value1, Date value2) {
            addCriterion("lastreply_time between", value1, value2, "lastreplyTime");
            return (Criteria) this;
        }

        public Criteria andLastreplyTimeNotBetween(Date value1, Date value2) {
            addCriterion("lastreply_time not between", value1, value2, "lastreplyTime");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}