package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.List;

public class BlogTypeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogTypeExample() {
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

        public Criteria andBlogTypeidIsNull() {
            addCriterion("blog_typeId is null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidIsNotNull() {
            addCriterion("blog_typeId is not null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidEqualTo(Integer value) {
            addCriterion("blog_typeId =", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidNotEqualTo(Integer value) {
            addCriterion("blog_typeId <>", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidGreaterThan(Integer value) {
            addCriterion("blog_typeId >", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidGreaterThanOrEqualTo(Integer value) {
            addCriterion("blog_typeId >=", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidLessThan(Integer value) {
            addCriterion("blog_typeId <", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidLessThanOrEqualTo(Integer value) {
            addCriterion("blog_typeId <=", value, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidIn(List<Integer> values) {
            addCriterion("blog_typeId in", values, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidNotIn(List<Integer> values) {
            addCriterion("blog_typeId not in", values, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidBetween(Integer value1, Integer value2) {
            addCriterion("blog_typeId between", value1, value2, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeidNotBetween(Integer value1, Integer value2) {
            addCriterion("blog_typeId not between", value1, value2, "blogTypeid");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameIsNull() {
            addCriterion("blog_type_name is null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameIsNotNull() {
            addCriterion("blog_type_name is not null");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameEqualTo(String value) {
            addCriterion("blog_type_name =", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameNotEqualTo(String value) {
            addCriterion("blog_type_name <>", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameGreaterThan(String value) {
            addCriterion("blog_type_name >", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameGreaterThanOrEqualTo(String value) {
            addCriterion("blog_type_name >=", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameLessThan(String value) {
            addCriterion("blog_type_name <", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameLessThanOrEqualTo(String value) {
            addCriterion("blog_type_name <=", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameLike(String value) {
            addCriterion("blog_type_name like", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameNotLike(String value) {
            addCriterion("blog_type_name not like", value, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameIn(List<String> values) {
            addCriterion("blog_type_name in", values, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameNotIn(List<String> values) {
            addCriterion("blog_type_name not in", values, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameBetween(String value1, String value2) {
            addCriterion("blog_type_name between", value1, value2, "blogTypeName");
            return (Criteria) this;
        }

        public Criteria andBlogTypeNameNotBetween(String value1, String value2) {
            addCriterion("blog_type_name not between", value1, value2, "blogTypeName");
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