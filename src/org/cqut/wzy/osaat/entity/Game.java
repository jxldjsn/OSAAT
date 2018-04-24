package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class Game {
    private Long gameId;

    private String gameName;

    private String gameUrl;

    private String gameCoverUrl;

    private String uploadTime;

    private Integer gameType;

    private String gameIntroduce;

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName == null ? null : gameName.trim();
    }

    public String getGameUrl() {
        return gameUrl;
    }

    public void setGameUrl(String gameUrl) {
        this.gameUrl = gameUrl == null ? null : gameUrl.trim();
    }

    public String getGameCoverUrl() {
        return gameCoverUrl;
    }

    public void setGameCoverUrl(String gameCoverUrl) {
        this.gameCoverUrl = gameCoverUrl == null ? null : gameCoverUrl.trim();
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
    }

    public Integer getGameType() {
        return gameType;
    }

    public void setGameType(Integer gameType) {
        this.gameType = gameType;
    }

    public String getGameIntroduce() {
        return gameIntroduce;
    }

    public void setGameIntroduce(String gameIntroduce) {
        this.gameIntroduce = gameIntroduce == null ? null : gameIntroduce.trim();
    }
}