package com.app.controller;

import com.app.entity.Besoin;
import com.app.entity.FileDB;
import com.app.service.BesoinService;
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
public class BesoinController {

    @Autowired
    private BesoinService service;

ObjectMapper objectMapper;

    public BesoinController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping("/addBesoin")
    public Besoin addBesoin(@RequestParam("besoinData") String besoinDto, @RequestParam("file") MultipartFile multipartFile) throws IOException {
        Besoin besoinToSave = null;
        try {
            objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);

            Besoin besoin = objectMapper.readValue(besoinDto, Besoin.class);
        FileDB fileDB = new FileDB();
        System.out.println("Calling besoin " + besoin.getBesoin());
        fileDB.setName(besoin.getBesoin().getName());
        fileDB.setData(multipartFile.getBytes());
        fileDB.setType(besoin.getBesoin().getType());
            fileStorageService.saveFileDB(fileDB);

            besoin.setBesoin(fileDB);

        System.out.println("Someone is calling this endpoint in order to create a new candidate!");

            besoinToSave = service.saveBesoin(besoin);
        } catch (Exception e) {
            System.out.println("Exception: "+ e);
        }
        return besoinToSave;
    }

    @PostMapping("addBesoins")
    public List<Besoin> addBesoins(@RequestBody List<Besoin> besoins) {
        return service.savebesoins(besoins);
    }

    @CrossOrigin
    @GetMapping("/besoins")
    public List<Besoin> findAllBesoins() {
        System.out.println("Something is calling this endpoint!");
        return service.getBesoins();
    }

    @GetMapping("/getbesoin/{idbesoin}")
    public Besoin findBesoinById(@PathVariable int idbesoin) {
        return service.getBesoinById(idbesoin);
    }

    @GetMapping("/besoin/{filBesoin}")
    public Besoin findBesoinByName(@PathVariable String filBesoin) {
        return service.getBesoinByfilBesoin(filBesoin);
    }

    @PutMapping("/updateBesoin/{idbesoin}")
    public Besoin updateBesoin(@RequestBody Besoin besoin, @PathVariable int idbesoin) {
        return service.updateBesoin(besoin, idbesoin);
    }

    @DeleteMapping("/deleteBesoin/{idbesoin}")
    public String deleteBesoin(@PathVariable int idbesoin) {
        return service.deleteBesoin(idbesoin);
    }


}
