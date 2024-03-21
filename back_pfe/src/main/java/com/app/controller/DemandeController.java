package com.app.controller;


import com.app.dto.DemandeDto;
import com.app.entity.Candidat;
import com.app.entity.Demande;
import com.app.entity.FileDB;
import com.app.service.CandidatService;
import com.app.service.DemandeService;
import com.app.service.FileStorageService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
public class DemandeController {

    @Autowired
    private DemandeService service;

    ObjectMapper objectMapper;

    public DemandeController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/addDemande")
    public Demande addDemande(@RequestParam("demandeData") String demandeDto, @RequestParam("file") MultipartFile multipartFile) throws IOException {
        Demande demandeToSave = null;
        try {
            objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);

            Demande dem = objectMapper.readValue(demandeDto, Demande.class);
            FileDB fileDB = new FileDB();
            System.out.println("Calling demande " + dem.getDemande());
            fileDB.setName(dem.getDemande().getName());
            fileDB.setData(multipartFile.getBytes());
            fileDB.setType(dem.getDemande().getType());
            fileStorageService.saveFileDB(fileDB);

            dem.setDemande(fileDB);

            System.out.println("Someone is calling this endpoint in order to create a new request!");

            demandeToSave = service.saveDemande(dem);
        } catch (Exception e) {
            System.out.println("Exception: "+ e);
        }
        return demandeToSave;
    }


    @PostMapping("addDemandes")
    public List<Demande> addDemandes(@RequestBody List<Demande> demandes) {
        return service.saveDemandes(demandes);
    }

    @GetMapping("/demandes")
    public List<Demande> findAllDemandes() { return service.getDemandes();}

    @GetMapping("/getdemande/{IdDem}")
    public Demande findDemandeById(@PathVariable int IdDem) {
        return service.getDemandeById(IdDem);
    }

    @GetMapping("/demande/{filiale}")
    public Demande findDemandeByName(@PathVariable String filiale) {
        return service.getDemandeByFiliale(filiale);
    }

    @PutMapping("/updateDemande/{IdDem}")
    public Demande updateDemande(@RequestBody Demande demande, @PathVariable int IdDem) {
        return service.updateDemande(demande, IdDem);
    }

    @DeleteMapping("/deleteDemande/{IdDem}")
    public String deleteDemande(@PathVariable int IdDem) {
        return service.deleteDemande(IdDem);
    }
}
