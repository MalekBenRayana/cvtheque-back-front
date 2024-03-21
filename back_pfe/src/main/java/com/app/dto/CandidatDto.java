package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

public class CandidatDto {
    private String nom;
    private int age;
    private String sf;
    private String formation;
    private String profil;
    private int total;
    private String adresse;
    private String demande;
    private String source;
    private String nature;
    private MultipartFile cv;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSf() {
        return sf;
    }

    public void setSf(String sf) {
        this.sf = sf;
    }

    public String getFormation() {
        return formation;
    }

    public void setFormation(String formation) {
        this.formation = formation;
    }

    public String getProfil() {
        return profil;
    }

    public void setProfil(String profil) {
        this.profil = profil;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getDemande() {
        return demande;
    }

    public void setDemande(String demande) {
        this.demande = demande;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getNature() {
        return nature;
    }

    public void setNature(String nature) {
        this.nature = nature;
    }

    public MultipartFile getCv() {
        return cv;
    }

    public void setCv(MultipartFile cv) {
        this.cv = cv;
    }

    public CandidatDto(String nom, int age, String sf, String formation, String profil, int total, String adresse,
                       String demande, String source, String nature, MultipartFile cv) {
        this.nom = nom;
        this.age = age;
        this.sf = sf;
        this.formation = formation;
        this.profil = profil;
        this.total = total;
        this.adresse = adresse;
        this.demande = demande;
        this.source = source;
        this.nature = nature;
        this.cv = cv;
    }
}

