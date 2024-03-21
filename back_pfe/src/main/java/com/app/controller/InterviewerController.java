package com.app.controller;



import com.app.entity.Entretien;
import com.app.entity.FileDB;
import com.app.entity.Interviewer;
import com.app.service.EntretienService;
import com.app.service.FileStorageService;
import com.app.service.InterviewerService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class InterviewerController {

    @Autowired
    private InterviewerService interviewerService;

    ObjectMapper objectMapper;

    public InterviewerController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }


    @GetMapping("/interviewers")
    public List<Interviewer> findAllEntretiens() {
        return interviewerService.getInterviewers();
    }

}
