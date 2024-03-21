package com.app.dto;

import com.app.entity.FileDB;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.ManyToOne;
import java.util.Date;

public class EntretienDto {

    private String nometprenom ;
    private int nbentretien;
    private Date dateentretien;
    private String typeentretien;
    private String intervenantRBG;

    public String getNometprenom() {
        return nometprenom;
    }

    public void setNometprenom(String nometprenom) {
        this.nometprenom = nometprenom;
    }

    public int getNbentretien() {
        return nbentretien;
    }

    public void setNbentretien(int nbentretien) {
        this.nbentretien = nbentretien;
    }

    public Date getDateentretien() {
        return dateentretien;
    }

    public void setDateentretien(Date dateentretien) {
        this.dateentretien = dateentretien;
    }

    public String getTypeentretien() {
        return typeentretien;
    }

    public void setTypeentretien(String typeentretien) {
        this.typeentretien = typeentretien;
    }

    public String getIntervenantRBG() {
        return intervenantRBG;
    }

    public void setIntervenantRBG(String intervenantRBG) {
        this.intervenantRBG = intervenantRBG;
    }

    public String getStatutent() {
        return statutent;
    }

    public void setStatutent(String statutent) {
        this.statutent = statutent;
    }

    public MultipartFile getCv() {
        return cv;
    }

    public void setCv(MultipartFile cv) {
        this.cv = cv;
    }

    private String statutent;
    private MultipartFile cv;



    public EntretienDto(String nometprenom, int nbentretien, Date  dateentretien, String typeentretien,
                        String intervenantRBG, String statutent,  MultipartFile cv) {
        this.nometprenom = nometprenom;
        this.nbentretien = nbentretien;
        this.dateentretien = dateentretien;
        this.typeentretien = typeentretien;
        this.intervenantRBG = intervenantRBG;
        this.statutent = statutent;
        this.cv = cv;


    }
}

