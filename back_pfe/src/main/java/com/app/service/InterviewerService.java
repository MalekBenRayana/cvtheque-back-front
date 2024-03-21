package com.app.service;


import com.app.entity.Entretien;
import com.app.entity.Interviewer;
import com.app.repository.EntretienRepository;
import com.app.repository.InterviewerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewerService {

    @Autowired
    private InterviewerRepository interviewerRepository;


    public List<Interviewer> getInterviewers() {
        return interviewerRepository.findAll();
    }

    public Interviewer getInterviewerByFirstNameAndLastName(String fName, String lName) {
        return interviewerRepository.findByFirstNameAndLastName(fName, lName);
    }

}
