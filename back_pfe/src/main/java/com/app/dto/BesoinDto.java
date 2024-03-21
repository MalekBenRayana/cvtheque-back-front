package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

public class BesoinDto {

    private String filBesoin;
    private Date date;
    private String posteBesoin;
    private String descPoste;
    private String service;
    private int motifBesoin;
    private Date dateEmb;
    private String statBesoin;
    private MultipartFile besoin;

    public String getFilBesoin() {
        return filBesoin;
    }

    public void setFilBesoin(String filBesoin) {
        this.filBesoin = filBesoin;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPosteBesoin() {
        return posteBesoin;
    }

    public void setPosteBesoin(String posteBesoin) {
        this.posteBesoin = posteBesoin;
    }

    public String getDescPoste() {
        return descPoste;
    }

    public void setDescPoste(String descPoste) {
        this.descPoste = descPoste;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public int getMotifBesoin() {
        return motifBesoin;
    }

    public void setMotifBesoin(int motifBesoin) {
        this.motifBesoin = motifBesoin;
    }

    public Date getDateEmb() {
        return dateEmb;
    }

    public void setDateEmb(Date dateEmb) {
        this.dateEmb = dateEmb;
    }

    public String getStatBesoin() {
        return statBesoin;
    }

    public void setStatBesoin(String statBesoin) {
        this.statBesoin = statBesoin;
    }

    public MultipartFile getBesoin() {
        return besoin;
    }

    public void setBesoin(MultipartFile besoin) {
        this.besoin = besoin;
    }

    public BesoinDto(String filBesoin, Date date, String posteBesoin, String descPoste, String service,
                     int motifBesoin, Date dateEmb, String statBesoin, MultipartFile besoin) {
        this.filBesoin = filBesoin;
        this.date = date;
        this.posteBesoin = posteBesoin;
        this.descPoste = descPoste;
        this.service = service;
        this.motifBesoin = motifBesoin;
        this.dateEmb = dateEmb;
        this.statBesoin = statBesoin;
        this.besoin = besoin;

    }
}

