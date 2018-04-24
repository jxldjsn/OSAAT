package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GameExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public GameExample() {
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

        public Criteria andGameIdIsNull() {
            addCriterion("game_id is null");
            return (Criteria) this;
        }

        public Criteria andGameIdIsNotNull() {
            addCriterion("game_id is not null");
            return (Criteria) this;
        }

        public Criteria andGameIdEqualTo(Long value) {
            addCriterion("game_id =", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdNotEqualTo(Long value) {
            addCriterion("game_id <>", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdGreaterThan(Long value) {
            addCriterion("game_id >", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdGreaterThanOrEqualTo(Long value) {
            addCriterion("game_id >=", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdLessThan(Long value) {
            addCriterion("game_id <", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdLessThanOrEqualTo(Long value) {
            addCriterion("game_id <=", value, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdIn(List<Long> values) {
            addCriterion("game_id in", values, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdNotIn(List<Long> values) {
            addCriterion("game_id not in", values, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdBetween(Long value1, Long value2) {
            addCriterion("game_id between", value1, value2, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameIdNotBetween(Long value1, Long value2) {
            addCriterion("game_id not between", value1, value2, "gameId");
            return (Criteria) this;
        }

        public Criteria andGameNameIsNull() {
            addCriterion("game_name is null");
            return (Criteria) this;
        }

        public Criteria andGameNameIsNotNull() {
            addCriterion("game_name is not null");
            return (Criteria) this;
        }

        public Criteria andGameNameEqualTo(String value) {
            addCriterion("game_name =", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameNotEqualTo(String value) {
            addCriterion("game_name <>", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameGreaterThan(String value) {
            addCriterion("game_name >", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameGreaterThanOrEqualTo(String value) {
            addCriterion("game_name >=", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameLessThan(String value) {
            addCriterion("game_name <", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameLessThanOrEqualTo(String value) {
            addCriterion("game_name <=", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameLike(String value) {
            addCriterion("game_name like", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameNotLike(String value) {
            addCriterion("game_name not like", value, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameIn(List<String> values) {
            addCriterion("game_name in", values, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameNotIn(List<String> values) {
            addCriterion("game_name not in", values, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameBetween(String value1, String value2) {
            addCriterion("game_name between", value1, value2, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameNameNotBetween(String value1, String value2) {
            addCriterion("game_name not between", value1, value2, "gameName");
            return (Criteria) this;
        }

        public Criteria andGameUrlIsNull() {
            addCriterion("game_url is null");
            return (Criteria) this;
        }

        public Criteria andGameUrlIsNotNull() {
            addCriterion("game_url is not null");
            return (Criteria) this;
        }

        public Criteria andGameUrlEqualTo(String value) {
            addCriterion("game_url =", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlNotEqualTo(String value) {
            addCriterion("game_url <>", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlGreaterThan(String value) {
            addCriterion("game_url >", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlGreaterThanOrEqualTo(String value) {
            addCriterion("game_url >=", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlLessThan(String value) {
            addCriterion("game_url <", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlLessThanOrEqualTo(String value) {
            addCriterion("game_url <=", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlLike(String value) {
            addCriterion("game_url like", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlNotLike(String value) {
            addCriterion("game_url not like", value, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlIn(List<String> values) {
            addCriterion("game_url in", values, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlNotIn(List<String> values) {
            addCriterion("game_url not in", values, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlBetween(String value1, String value2) {
            addCriterion("game_url between", value1, value2, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameUrlNotBetween(String value1, String value2) {
            addCriterion("game_url not between", value1, value2, "gameUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlIsNull() {
            addCriterion("game_cover_url is null");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlIsNotNull() {
            addCriterion("game_cover_url is not null");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlEqualTo(String value) {
            addCriterion("game_cover_url =", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlNotEqualTo(String value) {
            addCriterion("game_cover_url <>", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlGreaterThan(String value) {
            addCriterion("game_cover_url >", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlGreaterThanOrEqualTo(String value) {
            addCriterion("game_cover_url >=", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlLessThan(String value) {
            addCriterion("game_cover_url <", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlLessThanOrEqualTo(String value) {
            addCriterion("game_cover_url <=", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlLike(String value) {
            addCriterion("game_cover_url like", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlNotLike(String value) {
            addCriterion("game_cover_url not like", value, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlIn(List<String> values) {
            addCriterion("game_cover_url in", values, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlNotIn(List<String> values) {
            addCriterion("game_cover_url not in", values, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlBetween(String value1, String value2) {
            addCriterion("game_cover_url between", value1, value2, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andGameCoverUrlNotBetween(String value1, String value2) {
            addCriterion("game_cover_url not between", value1, value2, "gameCoverUrl");
            return (Criteria) this;
        }

        public Criteria andUploadTimeIsNull() {
            addCriterion("upload_time is null");
            return (Criteria) this;
        }

        public Criteria andUploadTimeIsNotNull() {
            addCriterion("upload_time is not null");
            return (Criteria) this;
        }

        public Criteria andUploadTimeEqualTo(Date value) {
            addCriterion("upload_time =", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeNotEqualTo(Date value) {
            addCriterion("upload_time <>", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeGreaterThan(Date value) {
            addCriterion("upload_time >", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("upload_time >=", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeLessThan(Date value) {
            addCriterion("upload_time <", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeLessThanOrEqualTo(Date value) {
            addCriterion("upload_time <=", value, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeIn(List<Date> values) {
            addCriterion("upload_time in", values, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeNotIn(List<Date> values) {
            addCriterion("upload_time not in", values, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeBetween(Date value1, Date value2) {
            addCriterion("upload_time between", value1, value2, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andUploadTimeNotBetween(Date value1, Date value2) {
            addCriterion("upload_time not between", value1, value2, "uploadTime");
            return (Criteria) this;
        }

        public Criteria andGameTypeIsNull() {
            addCriterion("game_type is null");
            return (Criteria) this;
        }

        public Criteria andGameTypeIsNotNull() {
            addCriterion("game_type is not null");
            return (Criteria) this;
        }

        public Criteria andGameTypeEqualTo(Integer value) {
            addCriterion("game_type =", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeNotEqualTo(Integer value) {
            addCriterion("game_type <>", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeGreaterThan(Integer value) {
            addCriterion("game_type >", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeGreaterThanOrEqualTo(Integer value) {
            addCriterion("game_type >=", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeLessThan(Integer value) {
            addCriterion("game_type <", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeLessThanOrEqualTo(Integer value) {
            addCriterion("game_type <=", value, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeIn(List<Integer> values) {
            addCriterion("game_type in", values, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeNotIn(List<Integer> values) {
            addCriterion("game_type not in", values, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeBetween(Integer value1, Integer value2) {
            addCriterion("game_type between", value1, value2, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameTypeNotBetween(Integer value1, Integer value2) {
            addCriterion("game_type not between", value1, value2, "gameType");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceIsNull() {
            addCriterion("game_introduce is null");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceIsNotNull() {
            addCriterion("game_introduce is not null");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceEqualTo(String value) {
            addCriterion("game_introduce =", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceNotEqualTo(String value) {
            addCriterion("game_introduce <>", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceGreaterThan(String value) {
            addCriterion("game_introduce >", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceGreaterThanOrEqualTo(String value) {
            addCriterion("game_introduce >=", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceLessThan(String value) {
            addCriterion("game_introduce <", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceLessThanOrEqualTo(String value) {
            addCriterion("game_introduce <=", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceLike(String value) {
            addCriterion("game_introduce like", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceNotLike(String value) {
            addCriterion("game_introduce not like", value, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceIn(List<String> values) {
            addCriterion("game_introduce in", values, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceNotIn(List<String> values) {
            addCriterion("game_introduce not in", values, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceBetween(String value1, String value2) {
            addCriterion("game_introduce between", value1, value2, "gameIntroduce");
            return (Criteria) this;
        }

        public Criteria andGameIntroduceNotBetween(String value1, String value2) {
            addCriterion("game_introduce not between", value1, value2, "gameIntroduce");
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