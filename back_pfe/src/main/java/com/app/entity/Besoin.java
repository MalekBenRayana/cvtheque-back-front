package com.app.entity;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@Entity
@Table(name= "BESOIN_TBL")
@Getter
@Setter
@ToString
public class Besoin {
    @Id
    @GeneratedValue
    private int idBesoin;
    private String filBesoin;
    private Date date;
    private String posteBesoin;
    private String descPoste;
    private String service;
    private String motifBesoin;
    private Date dateEmb;
    private String statBesoin;
    @ManyToOne
    private FileDB besoin;

    public Besoin() {

    }
}
