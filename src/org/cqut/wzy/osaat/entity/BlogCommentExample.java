package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BlogCommentExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogCommentExample() {
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

        public Criteria andBlogCommentidIsNull() {
            addCriterion("blog_commentId is null");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidIsNotNull() {
            addCriterion("blog_commentId is not null");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidEqualTo(Long value) {
            addCriterion("blog_commentId =", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidNotEqualTo(Long value) {
            addCriterion("blog_commentId <>", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidGreaterThan(Long value) {
            addCriterion("blog_commentId >", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidGreaterThanOrEqualTo(Long value) {
            addCriterion("blog_commentId >=", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidLessThan(Long value) {
            addCriterion("blog_commentId <", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidLessThanOrEqualTo(Long value) {
            addCriterion("blog_commentId <=", value, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidIn(List<Long> values) {
            addCriterion("blog_commentId in", values, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidNotIn(List<Long> values) {
            addCriterion("blog_commentId not in", values, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidBetween(Long value1, Long value2) {
            addCriterion("blog_commentId between", value1, value2, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andBlogCommentidNotBetween(Long value1, Long value2) {
            addCriterion("blog_commentId not between", value1, value2, "blogCommentid");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserIsNull() {
            addCriterion("comment_blog_user is null");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserIsNotNull() {
            addCriterion("comment_blog_user is not null");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserEqualTo(Long value) {
            addCriterion("comment_blog_user =", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserNotEqualTo(Long value) {
            addCriterion("comment_blog_user <>", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserGreaterThan(Long value) {
            addCriterion("comment_blog_user >", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserGreaterThanOrEqualTo(Long value) {
            addCriterion("comment_blog_user >=", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserLessThan(Long value) {
            addCriterion("comment_blog_user <", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserLessThanOrEqualTo(Long value) {
            addCriterion("comment_blog_user <=", value, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserIn(List<Long> values) {
            addCriterion("comment_blog_user in", values, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserNotIn(List<Long> values) {
            addCriterion("comment_blog_user not in", values, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserBetween(Long value1, Long value2) {
            addCriterion("comment_blog_user between", value1, value2, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogUserNotBetween(Long value1, Long value2) {
            addCriterion("comment_blog_user not between", value1, value2, "commentBlogUser");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdIsNull() {
            addCriterion("comment_blog_id is null");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdIsNotNull() {
            addCriterion("comment_blog_id is not null");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdEqualTo(Long value) {
            addCriterion("comment_blog_id =", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdNotEqualTo(Long value) {
            addCriterion("comment_blog_id <>", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdGreaterThan(Long value) {
            addCriterion("comment_blog_id >", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdGreaterThanOrEqualTo(Long value) {
            addCriterion("comment_blog_id >=", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdLessThan(Long value) {
            addCriterion("comment_blog_id <", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdLessThanOrEqualTo(Long value) {
            addCriterion("comment_blog_id <=", value, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdIn(List<Long> values) {
            addCriterion("comment_blog_id in", values, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdNotIn(List<Long> values) {
            addCriterion("comment_blog_id not in", values, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdBetween(Long value1, Long value2) {
            addCriterion("comment_blog_id between", value1, value2, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentBlogIdNotBetween(Long value1, Long value2) {
            addCriterion("comment_blog_id not between", value1, value2, "commentBlogId");
            return (Criteria) this;
        }

        public Criteria andCommentTimeIsNull() {
            addCriterion("comment_time is null");
            return (Criteria) this;
        }

        public Criteria andCommentTimeIsNotNull() {
            addCriterion("comment_time is not null");
            return (Criteria) this;
        }

        public Criteria andCommentTimeEqualTo(Date value) {
            addCriterion("comment_time =", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeNotEqualTo(Date value) {
            addCriterion("comment_time <>", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeGreaterThan(Date value) {
            addCriterion("comment_time >", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("comment_time >=", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeLessThan(Date value) {
            addCriterion("comment_time <", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeLessThanOrEqualTo(Date value) {
            addCriterion("comment_time <=", value, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeIn(List<Date> values) {
            addCriterion("comment_time in", values, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeNotIn(List<Date> values) {
            addCriterion("comment_time not in", values, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeBetween(Date value1, Date value2) {
            addCriterion("comment_time between", value1, value2, "commentTime");
            return (Criteria) this;
        }

        public Criteria andCommentTimeNotBetween(Date value1, Date value2) {
            addCriterion("comment_time not between", value1, value2, "commentTime");
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