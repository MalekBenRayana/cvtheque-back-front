package com.app.controller;

import com.app.entity.Candidat;
import com.app.entity.FileDB;
import com.app.service.CandidatService;
import com.app.service.FileStorageService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.print.Pageable;
import java.io.IOException;
import java.sql.Blob;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class CandidatController {

    @Autowired
    private CandidatService service;

ObjectMapper objectMapper;

    public CandidatController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/addCandidat")
    public Candidat addCandidat(@RequestParam("candidatData") String candidatDto, @RequestParam("file") MultipartFile multipartFile) throws IOException {
        Candidat candidatToSave = null;
        try {
            objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);

            Candidat cand = objectMapper.readValue(candidatDto, Candidat.class);
        FileDB fileDB = new FileDB();
        System.out.println("Calling CV " + cand.getCv());
        fileDB.setName(cand.getCv().getName());
        fileDB.setData(multipartFile.getBytes());
        fileDB.setType(cand.getCv().getType());
            fileStorageService.saveFileDB(fileDB);

            cand.setCv(fileDB);

        System.out.println("Someone is calling this endpoint in order to create a new candidate!");

            candidatToSave = service.saveCandidat(cand);
        } catch (Exception e) {
            System.out.println("Exception: "+ e);
        }
        return candidatToSave;
    }

    @PostMapping("addCandidats")
    public List<Candidat> addCandidats(@RequestBody List<Candidat> candidats) {
        return service.saveCandidats(candidats);
    }

    @CrossOrigin
    @GetMapping("/candidats")
    public List<Candidat> findAllCandidats() {
        System.out.println("Something is calling this endpoint!");
        return service.getCandidats();
    }

    @GetMapping("/getcandidat/{identifiant}")
    public Candidat findCandidatById(@PathVariable int identifiant) {
        return service.getCandidatById(identifiant);
    }

    @GetMapping("/candidat/{nom}")
    public Candidat findCandidatByName(@PathVariable String nom) {
        return service.getCandidatByNom(nom);
    }

    @PutMapping("/updateCandidat/{identifiant}")
    public Candidat updateCandidat(@RequestBody Candidat candidat, @PathVariable int identifiant) {
        return service.updateCandidat(candidat, identifiant);
    }

    @DeleteMapping("/deleteCandidat/{identifiant}")
    public String deleteCandidat(@PathVariable int identifiant) {
        return service.deleteCandidat(identifiant);
    }


}
