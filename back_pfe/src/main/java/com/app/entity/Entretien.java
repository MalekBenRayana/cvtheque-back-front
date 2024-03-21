package com.app.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@Entity
@Getter
@Setter
@ToString
@Table(name= "ENTRETIEN_TBL")
public class Entretien {
    @Id
    @GeneratedValue
    private int idfiche;
    private String nometprenom ;
    private int nbentretien;
    private Date dateentretien;
    private String typeentretien;
    @OneToMany
    private List<Interviewer> intervenantRBG;
    private String statutent;
    @ManyToOne
    private FileDB cv;


    public Entretien() {

    }

}
