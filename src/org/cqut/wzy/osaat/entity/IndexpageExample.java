package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class IndexpageExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public IndexpageExample() {
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

        public Criteria andIndexpageIdIsNull() {
            addCriterion("indexpage_id is null");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdIsNotNull() {
            addCriterion("indexpage_id is not null");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdEqualTo(Long value) {
            addCriterion("indexpage_id =", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdNotEqualTo(Long value) {
            addCriterion("indexpage_id <>", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdGreaterThan(Long value) {
            addCriterion("indexpage_id >", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdGreaterThanOrEqualTo(Long value) {
            addCriterion("indexpage_id >=", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdLessThan(Long value) {
            addCriterion("indexpage_id <", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdLessThanOrEqualTo(Long value) {
            addCriterion("indexpage_id <=", value, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdIn(List<Long> values) {
            addCriterion("indexpage_id in", values, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdNotIn(List<Long> values) {
            addCriterion("indexpage_id not in", values, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdBetween(Long value1, Long value2) {
            addCriterion("indexpage_id between", value1, value2, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andIndexpageIdNotBetween(Long value1, Long value2) {
            addCriterion("indexpage_id not between", value1, value2, "indexpageId");
            return (Criteria) this;
        }

        public Criteria andTitleIsNull() {
            addCriterion("title is null");
            return (Criteria) this;
        }

        public Criteria andTitleIsNotNull() {
            addCriterion("title is not null");
            return (Criteria) this;
        }

        public Criteria andTitleEqualTo(String value) {
            addCriterion("title =", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotEqualTo(String value) {
            addCriterion("title <>", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThan(String value) {
            addCriterion("title >", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThanOrEqualTo(String value) {
            addCriterion("title >=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThan(String value) {
            addCriterion("title <", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThanOrEqualTo(String value) {
            addCriterion("title <=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLike(String value) {
            addCriterion("title like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotLike(String value) {
            addCriterion("title not like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleIn(List<String> values) {
            addCriterion("title in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotIn(List<String> values) {
            addCriterion("title not in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleBetween(String value1, String value2) {
            addCriterion("title between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotBetween(String value1, String value2) {
            addCriterion("title not between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andImageIsNull() {
            addCriterion("image is null");
            return (Criteria) this;
        }

        public Criteria andImageIsNotNull() {
            addCriterion("image is not null");
            return (Criteria) this;
        }

        public Criteria andImageEqualTo(String value) {
            addCriterion("image =", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotEqualTo(String value) {
            addCriterion("image <>", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageGreaterThan(String value) {
            addCriterion("image >", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageGreaterThanOrEqualTo(String value) {
            addCriterion("image >=", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLessThan(String value) {
            addCriterion("image <", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLessThanOrEqualTo(String value) {
            addCriterion("image <=", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLike(String value) {
            addCriterion("image like", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotLike(String value) {
            addCriterion("image not like", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageIn(List<String> values) {
            addCriterion("image in", values, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotIn(List<String> values) {
            addCriterion("image not in", values, "image");
            return (Criteria) this;
        }

        public Criteria andImageBetween(String value1, String value2) {
            addCriterion("image between", value1, value2, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotBetween(String value1, String value2) {
            addCriterion("image not between", value1, value2, "image");
            return (Criteria) this;
        }

        public Criteria andSourceUrlIsNull() {
            addCriterion("source_url is null");
            return (Criteria) this;
        }

        public Criteria andSourceUrlIsNotNull() {
            addCriterion("source_url is not null");
            return (Criteria) this;
        }

        public Criteria andSourceUrlEqualTo(String value) {
            addCriterion("source_url =", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlNotEqualTo(String value) {
            addCriterion("source_url <>", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlGreaterThan(String value) {
            addCriterion("source_url >", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlGreaterThanOrEqualTo(String value) {
            addCriterion("source_url >=", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlLessThan(String value) {
            addCriterion("source_url <", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlLessThanOrEqualTo(String value) {
            addCriterion("source_url <=", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlLike(String value) {
            addCriterion("source_url like", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlNotLike(String value) {
            addCriterion("source_url not like", value, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlIn(List<String> values) {
            addCriterion("source_url in", values, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlNotIn(List<String> values) {
            addCriterion("source_url not in", values, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlBetween(String value1, String value2) {
            addCriterion("source_url between", value1, value2, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceUrlNotBetween(String value1, String value2) {
            addCriterion("source_url not between", value1, value2, "sourceUrl");
            return (Criteria) this;
        }

        public Criteria andSourceTypeIsNull() {
            addCriterion("source_type is null");
            return (Criteria) this;
        }

        public Criteria andSourceTypeIsNotNull() {
            addCriterion("source_type is not null");
            return (Criteria) this;
        }

        public Criteria andSourceTypeEqualTo(Integer value) {
            addCriterion("source_type =", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeNotEqualTo(Integer value) {
            addCriterion("source_type <>", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeGreaterThan(Integer value) {
            addCriterion("source_type >", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("source_type >=", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeLessThan(Integer value) {
            addCriterion("source_type <", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeLessThanOrEqualTo(Integer value) {
            addCriterion("source_type <=", value, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeIn(List<Integer> values) {
            addCriterion("source_type in", values, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeNotIn(List<Integer> values) {
            addCriterion("source_type not in", values, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeBetween(Integer value1, Integer value2) {
            addCriterion("source_type between", value1, value2, "sourceType");
            return (Criteria) this;
        }

        public Criteria andSourceTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("source_type not between", value1, value2, "sourceType");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractIsNull() {
            addCriterion("index_abstract is null");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractIsNotNull() {
            addCriterion("index_abstract is not null");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractEqualTo(String value) {
            addCriterion("index_abstract =", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractNotEqualTo(String value) {
            addCriterion("index_abstract <>", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractGreaterThan(String value) {
            addCriterion("index_abstract >", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractGreaterThanOrEqualTo(String value) {
            addCriterion("index_abstract >=", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractLessThan(String value) {
            addCriterion("index_abstract <", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractLessThanOrEqualTo(String value) {
            addCriterion("index_abstract <=", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractLike(String value) {
            addCriterion("index_abstract like", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractNotLike(String value) {
            addCriterion("index_abstract not like", value, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractIn(List<String> values) {
            addCriterion("index_abstract in", values, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractNotIn(List<String> values) {
            addCriterion("index_abstract not in", values, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractBetween(String value1, String value2) {
            addCriterion("index_abstract between", value1, value2, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andIndexAbstractNotBetween(String value1, String value2) {
            addCriterion("index_abstract not between", value1, value2, "indexAbstract");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleIsNull() {
            addCriterion("editor_people is null");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleIsNotNull() {
            addCriterion("editor_people is not null");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleEqualTo(String value) {
            addCriterion("editor_people =", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleNotEqualTo(String value) {
            addCriterion("editor_people <>", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleGreaterThan(String value) {
            addCriterion("editor_people >", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleGreaterThanOrEqualTo(String value) {
            addCriterion("editor_people >=", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleLessThan(String value) {
            addCriterion("editor_people <", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleLessThanOrEqualTo(String value) {
            addCriterion("editor_people <=", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleLike(String value) {
            addCriterion("editor_people like", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleNotLike(String value) {
            addCriterion("editor_people not like", value, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleIn(List<String> values) {
            addCriterion("editor_people in", values, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleNotIn(List<String> values) {
            addCriterion("editor_people not in", values, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleBetween(String value1, String value2) {
            addCriterion("editor_people between", value1, value2, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorPeopleNotBetween(String value1, String value2) {
            addCriterion("editor_people not between", value1, value2, "editorPeople");
            return (Criteria) this;
        }

        public Criteria andEditorTimeIsNull() {
            addCriterion("editor_time is null");
            return (Criteria) this;
        }

        public Criteria andEditorTimeIsNotNull() {
            addCriterion("editor_time is not null");
            return (Criteria) this;
        }

        public Criteria andEditorTimeEqualTo(Date value) {
            addCriterion("editor_time =", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeNotEqualTo(Date value) {
            addCriterion("editor_time <>", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeGreaterThan(Date value) {
            addCriterion("editor_time >", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("editor_time >=", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeLessThan(Date value) {
            addCriterion("editor_time <", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeLessThanOrEqualTo(Date value) {
            addCriterion("editor_time <=", value, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeIn(List<Date> values) {
            addCriterion("editor_time in", values, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeNotIn(List<Date> values) {
            addCriterion("editor_time not in", values, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeBetween(Date value1, Date value2) {
            addCriterion("editor_time between", value1, value2, "editorTime");
            return (Criteria) this;
        }

        public Criteria andEditorTimeNotBetween(Date value1, Date value2) {
            addCriterion("editor_time not between", value1, value2, "editorTime");
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