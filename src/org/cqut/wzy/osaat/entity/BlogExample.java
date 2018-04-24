package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BlogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogExample() {
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

        public Criteria andBlogIdIsNull() {
            addCriterion("blog_id is null");
            return (Criteria) this;
        }

        public Criteria andBlogIdIsNotNull() {
            addCriterion("blog_id is not null");
            return (Criteria) this;
        }

        public Criteria andBlogIdEqualTo(Long value) {
            addCriterion("blog_id =", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotEqualTo(Long value) {
            addCriterion("blog_id <>", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdGreaterThan(Long value) {
            addCriterion("blog_id >", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdGreaterThanOrEqualTo(Long value) {
            addCriterion("blog_id >=", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdLessThan(Long value) {
            addCriterion("blog_id <", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdLessThanOrEqualTo(Long value) {
            addCriterion("blog_id <=", value, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdIn(List<Long> values) {
            addCriterion("blog_id in", values, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotIn(List<Long> values) {
            addCriterion("blog_id not in", values, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdBetween(Long value1, Long value2) {
            addCriterion("blog_id between", value1, value2, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogIdNotBetween(Long value1, Long value2) {
            addCriterion("blog_id not between", value1, value2, "blogId");
            return (Criteria) this;
        }

        public Criteria andBlogTitleIsNull() {
            addCriterion("blog_title is null");
            return (Criteria) this;
        }

        public Criteria andBlogTitleIsNotNull() {
            addCriterion("blog_title is not null");
            return (Criteria) this;
        }

        public Criteria andBlogTitleEqualTo(String value) {
            addCriterion("blog_title =", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleNotEqualTo(String value) {
            addCriterion("blog_title <>", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleGreaterThan(String value) {
            addCriterion("blog_title >", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleGreaterThanOrEqualTo(String value) {
            addCriterion("blog_title >=", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleLessThan(String value) {
            addCriterion("blog_title <", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleLessThanOrEqualTo(String value) {
            addCriterion("blog_title <=", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleLike(String value) {
            addCriterion("blog_title like", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleNotLike(String value) {
            addCriterion("blog_title not like", value, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleIn(List<String> values) {
            addCriterion("blog_title in", values, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleNotIn(List<String> values) {
            addCriterion("blog_title not in", values, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleBetween(String value1, String value2) {
            addCriterion("blog_title between", value1, value2, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogTitleNotBetween(String value1, String value2) {
            addCriterion("blog_title not between", value1, value2, "blogTitle");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractIsNull() {
            addCriterion("blog_abstract is null");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractIsNotNull() {
            addCriterion("blog_abstract is not null");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractEqualTo(String value) {
            addCriterion("blog_abstract =", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractNotEqualTo(String value) {
            addCriterion("blog_abstract <>", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractGreaterThan(String value) {
            addCriterion("blog_abstract >", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractGreaterThanOrEqualTo(String value) {
            addCriterion("blog_abstract >=", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractLessThan(String value) {
            addCriterion("blog_abstract <", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractLessThanOrEqualTo(String value) {
            addCriterion("blog_abstract <=", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractLike(String value) {
            addCriterion("blog_abstract like", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractNotLike(String value) {
            addCriterion("blog_abstract not like", value, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractIn(List<String> values) {
            addCriterion("blog_abstract in", values, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractNotIn(List<String> values) {
            addCriterion("blog_abstract not in", values, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractBetween(String value1, String value2) {
            addCriterion("blog_abstract between", value1, value2, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAbstractNotBetween(String value1, String value2) {
            addCriterion("blog_abstract not between", value1, value2, "blogAbstract");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridIsNull() {
            addCriterion("blog_authorId is null");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridIsNotNull() {
            addCriterion("blog_authorId is not null");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridEqualTo(Long value) {
            addCriterion("blog_authorId =", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridNotEqualTo(Long value) {
            addCriterion("blog_authorId <>", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridGreaterThan(Long value) {
            addCriterion("blog_authorId >", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridGreaterThanOrEqualTo(Long value) {
            addCriterion("blog_authorId >=", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridLessThan(Long value) {
            addCriterion("blog_authorId <", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridLessThanOrEqualTo(Long value) {
            addCriterion("blog_authorId <=", value, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridIn(List<Long> values) {
            addCriterion("blog_authorId in", values, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridNotIn(List<Long> values) {
            addCriterion("blog_authorId not in", values, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridBetween(Long value1, Long value2) {
            addCriterion("blog_authorId between", value1, value2, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogAuthoridNotBetween(Long value1, Long value2) {
            addCriterion("blog_authorId not between", value1, value2, "blogAuthorid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeIsNull() {
            addCriterion("blog_type is null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeIsNotNull() {
            addCriterion("blog_type is not null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeEqualTo(Integer value) {
            addCriterion("blog_type =", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNotEqualTo(Integer value) {
            addCriterion("blog_type <>", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeGreaterThan(Integer value) {
            addCriterion("blog_type >", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("blog_type >=", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeLessThan(Integer value) {
            addCriterion("blog_type <", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeLessThanOrEqualTo(Integer value) {
            addCriterion("blog_type <=", value, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeIn(List<Integer> values) {
            addCriterion("blog_type in", values, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNotIn(List<Integer> values) {
            addCriterion("blog_type not in", values, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeBetween(Integer value1, Integer value2) {
            addCriterion("blog_type between", value1, value2, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("blog_type not between", value1, value2, "blogType");
            return (Criteria) this;
        }

        public Criteria andBlogDateIsNull() {
            addCriterion("blog_date is null");
            return (Criteria) this;
        }

        public Criteria andBlogDateIsNotNull() {
            addCriterion("blog_date is not null");
            return (Criteria) this;
        }

        public Criteria andBlogDateEqualTo(Date value) {
            addCriterion("blog_date =", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateNotEqualTo(Date value) {
            addCriterion("blog_date <>", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateGreaterThan(Date value) {
            addCriterion("blog_date >", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateGreaterThanOrEqualTo(Date value) {
            addCriterion("blog_date >=", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateLessThan(Date value) {
            addCriterion("blog_date <", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateLessThanOrEqualTo(Date value) {
            addCriterion("blog_date <=", value, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateIn(List<Date> values) {
            addCriterion("blog_date in", values, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateNotIn(List<Date> values) {
            addCriterion("blog_date not in", values, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateBetween(Date value1, Date value2) {
            addCriterion("blog_date between", value1, value2, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogDateNotBetween(Date value1, Date value2) {
            addCriterion("blog_date not between", value1, value2, "blogDate");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseIsNull() {
            addCriterion("blog_praise is null");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseIsNotNull() {
            addCriterion("blog_praise is not null");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseEqualTo(Integer value) {
            addCriterion("blog_praise =", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseNotEqualTo(Integer value) {
            addCriterion("blog_praise <>", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseGreaterThan(Integer value) {
            addCriterion("blog_praise >", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseGreaterThanOrEqualTo(Integer value) {
            addCriterion("blog_praise >=", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseLessThan(Integer value) {
            addCriterion("blog_praise <", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseLessThanOrEqualTo(Integer value) {
            addCriterion("blog_praise <=", value, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseIn(List<Integer> values) {
            addCriterion("blog_praise in", values, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseNotIn(List<Integer> values) {
            addCriterion("blog_praise not in", values, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseBetween(Integer value1, Integer value2) {
            addCriterion("blog_praise between", value1, value2, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogPraiseNotBetween(Integer value1, Integer value2) {
            addCriterion("blog_praise not between", value1, value2, "blogPraise");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseIsNull() {
            addCriterion("blog_browse is null");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseIsNotNull() {
            addCriterion("blog_browse is not null");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseEqualTo(Double value) {
            addCriterion("blog_browse =", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseNotEqualTo(Double value) {
            addCriterion("blog_browse <>", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseGreaterThan(Double value) {
            addCriterion("blog_browse >", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseGreaterThanOrEqualTo(Double value) {
            addCriterion("blog_browse >=", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseLessThan(Double value) {
            addCriterion("blog_browse <", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseLessThanOrEqualTo(Double value) {
            addCriterion("blog_browse <=", value, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseIn(List<Double> values) {
            addCriterion("blog_browse in", values, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseNotIn(List<Double> values) {
            addCriterion("blog_browse not in", values, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseBetween(Double value1, Double value2) {
            addCriterion("blog_browse between", value1, value2, "blogBrowse");
            return (Criteria) this;
        }

        public Criteria andBlogBrowseNotBetween(Double value1, Double value2) {
            addCriterion("blog_browse not between", value1, value2, "blogBrowse");
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