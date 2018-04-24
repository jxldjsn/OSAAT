package org.cqut.wzy.osaat.entity;

import java.util.Date;

public class Music {
    private Long songid;

    private String songname;

    private String songsrc;

    private String time;

    private Long uploadperson;

    private String songtype;

    private String songer;

    private String imagesrc;

    public Long getSongid() {
        return songid;
    }

    public void setSongid(Long songid) {
        this.songid = songid;
    }

    public String getSongname() {
        return songname;
    }

    public void setSongname(String songname) {
        this.songname = songname == null ? null : songname.trim();
    }

    public String getSongsrc() {
        return songsrc;
    }

    public void setSongsrc(String songsrc) {
        this.songsrc = songsrc == null ? null : songsrc.trim();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getUploadperson() {
        return uploadperson;
    }

    public void setUploadperson(Long uploadperson) {
        this.uploadperson = uploadperson;
    }

    public String getSongtype() {
        return songtype;
    }

    public void setSongtype(String songtype) {
        this.songtype = songtype == null ? null : songtype.trim();
    }

    public String getSonger() {
        return songer;
    }

    public void setSonger(String songer) {
        this.songer = songer == null ? null : songer.trim();
    }

    public String getImagesrc() {
        return imagesrc;
    }

    public void setImagesrc(String imagesrc) {
        this.imagesrc = imagesrc == null ? null : imagesrc.trim();
    }
}