package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MusicExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MusicExample() {
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

        public Criteria andSongidIsNull() {
            addCriterion("songid is null");
            return (Criteria) this;
        }

        public Criteria andSongidIsNotNull() {
            addCriterion("songid is not null");
            return (Criteria) this;
        }

        public Criteria andSongidEqualTo(Long value) {
            addCriterion("songid =", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidNotEqualTo(Long value) {
            addCriterion("songid <>", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidGreaterThan(Long value) {
            addCriterion("songid >", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidGreaterThanOrEqualTo(Long value) {
            addCriterion("songid >=", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidLessThan(Long value) {
            addCriterion("songid <", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidLessThanOrEqualTo(Long value) {
            addCriterion("songid <=", value, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidIn(List<Long> values) {
            addCriterion("songid in", values, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidNotIn(List<Long> values) {
            addCriterion("songid not in", values, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidBetween(Long value1, Long value2) {
            addCriterion("songid between", value1, value2, "songid");
            return (Criteria) this;
        }

        public Criteria andSongidNotBetween(Long value1, Long value2) {
            addCriterion("songid not between", value1, value2, "songid");
            return (Criteria) this;
        }

        public Criteria andSongnameIsNull() {
            addCriterion("songname is null");
            return (Criteria) this;
        }

        public Criteria andSongnameIsNotNull() {
            addCriterion("songname is not null");
            return (Criteria) this;
        }

        public Criteria andSongnameEqualTo(String value) {
            addCriterion("songname =", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameNotEqualTo(String value) {
            addCriterion("songname <>", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameGreaterThan(String value) {
            addCriterion("songname >", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameGreaterThanOrEqualTo(String value) {
            addCriterion("songname >=", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameLessThan(String value) {
            addCriterion("songname <", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameLessThanOrEqualTo(String value) {
            addCriterion("songname <=", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameLike(String value) {
            addCriterion("songname like", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameNotLike(String value) {
            addCriterion("songname not like", value, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameIn(List<String> values) {
            addCriterion("songname in", values, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameNotIn(List<String> values) {
            addCriterion("songname not in", values, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameBetween(String value1, String value2) {
            addCriterion("songname between", value1, value2, "songname");
            return (Criteria) this;
        }

        public Criteria andSongnameNotBetween(String value1, String value2) {
            addCriterion("songname not between", value1, value2, "songname");
            return (Criteria) this;
        }

        public Criteria andSongsrcIsNull() {
            addCriterion("songsrc is null");
            return (Criteria) this;
        }

        public Criteria andSongsrcIsNotNull() {
            addCriterion("songsrc is not null");
            return (Criteria) this;
        }

        public Criteria andSongsrcEqualTo(String value) {
            addCriterion("songsrc =", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcNotEqualTo(String value) {
            addCriterion("songsrc <>", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcGreaterThan(String value) {
            addCriterion("songsrc >", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcGreaterThanOrEqualTo(String value) {
            addCriterion("songsrc >=", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcLessThan(String value) {
            addCriterion("songsrc <", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcLessThanOrEqualTo(String value) {
            addCriterion("songsrc <=", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcLike(String value) {
            addCriterion("songsrc like", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcNotLike(String value) {
            addCriterion("songsrc not like", value, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcIn(List<String> values) {
            addCriterion("songsrc in", values, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcNotIn(List<String> values) {
            addCriterion("songsrc not in", values, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcBetween(String value1, String value2) {
            addCriterion("songsrc between", value1, value2, "songsrc");
            return (Criteria) this;
        }

        public Criteria andSongsrcNotBetween(String value1, String value2) {
            addCriterion("songsrc not between", value1, value2, "songsrc");
            return (Criteria) this;
        }

        public Criteria andTimeIsNull() {
            addCriterion("time is null");
            return (Criteria) this;
        }

        public Criteria andTimeIsNotNull() {
            addCriterion("time is not null");
            return (Criteria) this;
        }

        public Criteria andTimeEqualTo(Date value) {
            addCriterion("time =", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotEqualTo(Date value) {
            addCriterion("time <>", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThan(Date value) {
            addCriterion("time >", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("time >=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThan(Date value) {
            addCriterion("time <", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThanOrEqualTo(Date value) {
            addCriterion("time <=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeIn(List<Date> values) {
            addCriterion("time in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotIn(List<Date> values) {
            addCriterion("time not in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeBetween(Date value1, Date value2) {
            addCriterion("time between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotBetween(Date value1, Date value2) {
            addCriterion("time not between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andUploadpersonIsNull() {
            addCriterion("uploadperson is null");
            return (Criteria) this;
        }

        public Criteria andUploadpersonIsNotNull() {
            addCriterion("uploadperson is not null");
            return (Criteria) this;
        }

        public Criteria andUploadpersonEqualTo(Long value) {
            addCriterion("uploadperson =", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonNotEqualTo(Long value) {
            addCriterion("uploadperson <>", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonGreaterThan(Long value) {
            addCriterion("uploadperson >", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonGreaterThanOrEqualTo(Long value) {
            addCriterion("uploadperson >=", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonLessThan(Long value) {
            addCriterion("uploadperson <", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonLessThanOrEqualTo(Long value) {
            addCriterion("uploadperson <=", value, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonIn(List<Long> values) {
            addCriterion("uploadperson in", values, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonNotIn(List<Long> values) {
            addCriterion("uploadperson not in", values, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonBetween(Long value1, Long value2) {
            addCriterion("uploadperson between", value1, value2, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andUploadpersonNotBetween(Long value1, Long value2) {
            addCriterion("uploadperson not between", value1, value2, "uploadperson");
            return (Criteria) this;
        }

        public Criteria andSongtypeIsNull() {
            addCriterion("songtype is null");
            return (Criteria) this;
        }

        public Criteria andSongtypeIsNotNull() {
            addCriterion("songtype is not null");
            return (Criteria) this;
        }

        public Criteria andSongtypeEqualTo(String value) {
            addCriterion("songtype =", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeNotEqualTo(String value) {
            addCriterion("songtype <>", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeGreaterThan(String value) {
            addCriterion("songtype >", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeGreaterThanOrEqualTo(String value) {
            addCriterion("songtype >=", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeLessThan(String value) {
            addCriterion("songtype <", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeLessThanOrEqualTo(String value) {
            addCriterion("songtype <=", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeLike(String value) {
            addCriterion("songtype like", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeNotLike(String value) {
            addCriterion("songtype not like", value, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeIn(List<String> values) {
            addCriterion("songtype in", values, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeNotIn(List<String> values) {
            addCriterion("songtype not in", values, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeBetween(String value1, String value2) {
            addCriterion("songtype between", value1, value2, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongtypeNotBetween(String value1, String value2) {
            addCriterion("songtype not between", value1, value2, "songtype");
            return (Criteria) this;
        }

        public Criteria andSongerIsNull() {
            addCriterion("songer is null");
            return (Criteria) this;
        }

        public Criteria andSongerIsNotNull() {
            addCriterion("songer is not null");
            return (Criteria) this;
        }

        public Criteria andSongerEqualTo(String value) {
            addCriterion("songer =", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerNotEqualTo(String value) {
            addCriterion("songer <>", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerGreaterThan(String value) {
            addCriterion("songer >", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerGreaterThanOrEqualTo(String value) {
            addCriterion("songer >=", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerLessThan(String value) {
            addCriterion("songer <", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerLessThanOrEqualTo(String value) {
            addCriterion("songer <=", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerLike(String value) {
            addCriterion("songer like", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerNotLike(String value) {
            addCriterion("songer not like", value, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerIn(List<String> values) {
            addCriterion("songer in", values, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerNotIn(List<String> values) {
            addCriterion("songer not in", values, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerBetween(String value1, String value2) {
            addCriterion("songer between", value1, value2, "songer");
            return (Criteria) this;
        }

        public Criteria andSongerNotBetween(String value1, String value2) {
            addCriterion("songer not between", value1, value2, "songer");
            return (Criteria) this;
        }

        public Criteria andImagesrcIsNull() {
            addCriterion("imagesrc is null");
            return (Criteria) this;
        }

        public Criteria andImagesrcIsNotNull() {
            addCriterion("imagesrc is not null");
            return (Criteria) this;
        }

        public Criteria andImagesrcEqualTo(String value) {
            addCriterion("imagesrc =", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcNotEqualTo(String value) {
            addCriterion("imagesrc <>", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcGreaterThan(String value) {
            addCriterion("imagesrc >", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcGreaterThanOrEqualTo(String value) {
            addCriterion("imagesrc >=", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcLessThan(String value) {
            addCriterion("imagesrc <", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcLessThanOrEqualTo(String value) {
            addCriterion("imagesrc <=", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcLike(String value) {
            addCriterion("imagesrc like", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcNotLike(String value) {
            addCriterion("imagesrc not like", value, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcIn(List<String> values) {
            addCriterion("imagesrc in", values, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcNotIn(List<String> values) {
            addCriterion("imagesrc not in", values, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcBetween(String value1, String value2) {
            addCriterion("imagesrc between", value1, value2, "imagesrc");
            return (Criteria) this;
        }

        public Criteria andImagesrcNotBetween(String value1, String value2) {
            addCriterion("imagesrc not between", value1, value2, "imagesrc");
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