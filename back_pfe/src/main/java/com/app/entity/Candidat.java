package com.app.entity;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.File;


@AllArgsConstructor
@Entity
@Table(name= "CANDIDAT_TBL")
@Getter
@Setter
@ToString
public class Candidat {

    @Id
    @GeneratedValue
    private int identifiant;
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
    @ManyToOne
    private FileDB cv;

    public Candidat() {
    }
}
