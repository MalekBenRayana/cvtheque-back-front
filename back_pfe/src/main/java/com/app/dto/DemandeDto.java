package com.app.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class DemandeDto  {
    private String filiale;
    private Date date;
    private String poste;

    public String getFiliale() {
        return filiale;
    }

    public void setFiliale(String filiale) {
        this.filiale = filiale;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public Date getDateEmb() {
        return dateEmb;
    }

    public void setDateEmb(Date dateEmb) {
        this.dateEmb = dateEmb;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public MultipartFile getDemande() {
        return demande;
    }

    public void setDemande(MultipartFile demande) {
        this.demande = demande;
    }

    private String description;
    private String service;
    private String motif;
    private Date dateEmb;
    private String statut;
    private MultipartFile demande;


    public DemandeDto(String filiale, Date date, String poste, String description, String service, String motif,
                      Date dateEmb, String statut,  MultipartFile demande) {
        this.filiale = filiale;
        this.date = date;
        this.poste = poste;
        this.description = description;
        this.service = service;
        this.motif = motif;
        this.dateEmb = dateEmb;
        this.statut = statut;
        this.demande = demande;

    }

}
