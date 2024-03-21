package com.app.entity;


import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@Entity
@Getter
@Setter
@ToString

@Table(name= "DEMANDE")

public class Demande {
    @Id
    @GeneratedValue
    private int id;
    private String filiale;
    private Date date;
    private String poste;
    private String description;
    private String service;
    private String motif;
    private Date dateEmb;
    private String statut;
    @ManyToOne
    private FileDB demande;

    public Demande() {
    }


}
