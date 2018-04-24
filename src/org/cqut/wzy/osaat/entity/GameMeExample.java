package org.cqut.wzy.osaat.entity;

import java.util.ArrayList;
import java.util.List;

public class GameMeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public GameMeExample() {
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

        public Criteria andGameMeidIsNull() {
            addCriterion("game_meid is null");
            return (Criteria) this;
        }

        public Criteria andGameMeidIsNotNull() {
            addCriterion("game_meid is not null");
            return (Criteria) this;
        }

        public Criteria andGameMeidEqualTo(Long value) {
            addCriterion("game_meid =", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidNotEqualTo(Long value) {
            addCriterion("game_meid <>", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidGreaterThan(Long value) {
            addCriterion("game_meid >", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidGreaterThanOrEqualTo(Long value) {
            addCriterion("game_meid >=", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidLessThan(Long value) {
            addCriterion("game_meid <", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidLessThanOrEqualTo(Long value) {
            addCriterion("game_meid <=", value, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidIn(List<Long> values) {
            addCriterion("game_meid in", values, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidNotIn(List<Long> values) {
            addCriterion("game_meid not in", values, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidBetween(Long value1, Long value2) {
            addCriterion("game_meid between", value1, value2, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeidNotBetween(Long value1, Long value2) {
            addCriterion("game_meid not between", value1, value2, "gameMeid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridIsNull() {
            addCriterion("game_me_userID is null");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridIsNotNull() {
            addCriterion("game_me_userID is not null");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridEqualTo(Long value) {
            addCriterion("game_me_userID =", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridNotEqualTo(Long value) {
            addCriterion("game_me_userID <>", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridGreaterThan(Long value) {
            addCriterion("game_me_userID >", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridGreaterThanOrEqualTo(Long value) {
            addCriterion("game_me_userID >=", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridLessThan(Long value) {
            addCriterion("game_me_userID <", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridLessThanOrEqualTo(Long value) {
            addCriterion("game_me_userID <=", value, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridIn(List<Long> values) {
            addCriterion("game_me_userID in", values, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridNotIn(List<Long> values) {
            addCriterion("game_me_userID not in", values, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridBetween(Long value1, Long value2) {
            addCriterion("game_me_userID between", value1, value2, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeUseridNotBetween(Long value1, Long value2) {
            addCriterion("game_me_userID not between", value1, value2, "gameMeUserid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidIsNull() {
            addCriterion("game_me_gameid is null");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidIsNotNull() {
            addCriterion("game_me_gameid is not null");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidEqualTo(Long value) {
            addCriterion("game_me_gameid =", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidNotEqualTo(Long value) {
            addCriterion("game_me_gameid <>", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidGreaterThan(Long value) {
            addCriterion("game_me_gameid >", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidGreaterThanOrEqualTo(Long value) {
            addCriterion("game_me_gameid >=", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidLessThan(Long value) {
            addCriterion("game_me_gameid <", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidLessThanOrEqualTo(Long value) {
            addCriterion("game_me_gameid <=", value, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidIn(List<Long> values) {
            addCriterion("game_me_gameid in", values, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidNotIn(List<Long> values) {
            addCriterion("game_me_gameid not in", values, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidBetween(Long value1, Long value2) {
            addCriterion("game_me_gameid between", value1, value2, "gameMeGameid");
            return (Criteria) this;
        }

        public Criteria andGameMeGameidNotBetween(Long value1, Long value2) {
            addCriterion("game_me_gameid not between", value1, value2, "gameMeGameid");
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