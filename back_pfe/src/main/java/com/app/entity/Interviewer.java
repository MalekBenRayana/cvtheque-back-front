package com.app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@Entity
@Table(name= "interviewers")
@Getter
@Setter
@ToString
public class Interviewer {
    @Id
    @GeneratedValue
    private int idInterviewer;
    private String firstName;
    private String lastName;
    private String poste;


    public Interviewer() {

    }
}
