package com.app.controller;



import com.app.entity.Entretien;
import com.app.entity.FileDB;
import com.app.service.EntretienService;
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
public class EntretienController {

    @Autowired
    private EntretienService service;

    ObjectMapper objectMapper;

    public EntretienController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/addEntretien")
    public Entretien addEntretien(@RequestParam("entretienData") String entretienDto, @RequestParam("file") MultipartFile multipartFile) throws IOException {
        Entretien entretienToSave = null;
        try {
            objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);

            Entretien entretien = objectMapper.readValue(entretienDto, Entretien.class);
            FileDB fileDB = new FileDB();
            System.out.println("Calling besoin " + entretien.getCv());
            fileDB.setName(entretien.getCv().getName());
            fileDB.setData(multipartFile.getBytes());
            fileDB.setType(entretien.getCv().getType());
            fileStorageService.saveFileDB(fileDB);

            entretien.setCv(fileDB);

            System.out.println("Someone is calling this endpoint in order to create a new candidate!");

           entretienToSave = service.saveEntretien(entretien);
        } catch (Exception e) {
            System.out.println("Exception: "+ e);
        }
        return entretienToSave;
    }
    @PostMapping("addEntretiens")
    public List<Entretien> addEntretiens(@RequestBody List<Entretien> entretiens) {
        return service.saveEntretiens(entretiens);
    }

    @GetMapping("/entretiens")
    public List<Entretien> findAllEntretiens() {
        return service.getEntretiens();
    }

    @GetMapping("/getentretien/{Idfiche}")
    public Entretien findEntretienById(@PathVariable int Idfiche) {
        return service.getEntretienById(Idfiche);
    }

    @GetMapping("/entretien/{nometprenom}")
    public Entretien findEntretienByName(@PathVariable String nometprenom) {
        return service.getEntretienByNometprenom(nometprenom);
    }

    @PutMapping("/updateEntretien/{Idfiche}")
    public Entretien updateEntretien(@RequestBody Entretien entretien, @PathVariable int Idfiche) {
        return service.updateEntretien(entretien, Idfiche);
    }

    @DeleteMapping("/deleteEntretien/{Idfiche}")
    public String deleteEntretien(@PathVariable int Idfiche) {
        return service.deleteEntretien(Idfiche);
    }
}
