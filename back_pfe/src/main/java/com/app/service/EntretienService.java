package com.app.service;


import com.app.entity.Candidat;
import com.app.entity.Entretien;
import com.app.repository.EntretienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntretienService {

    @Autowired
    private EntretienRepository repository;
    public Entretien saveEntretien(Entretien entretienDto) {
        return repository.save(entretienDto);
    }

    public List<Entretien> saveEntretiens(List<Entretien> entretiens) {
        return repository.saveAll(entretiens);
    }

    public List<Entretien> getEntretiens() {
        return repository.findAll();
    }

    public Entretien getEntretienById(int idfiche) {
        return repository.findById(idfiche).orElse(null);
    }

    public Entretien getEntretienByNometprenom(String nometprenom) {
        return  repository.findByNometprenom(nometprenom);
    }

    public Entretien updateEntretien(Entretien entretien, int idfiche) {
        Entretien existingEntretien= repository.findById(idfiche).orElse(null);
        existingEntretien.setNometprenom(entretien.getNometprenom());
        existingEntretien.setDateentretien(entretien.getDateentretien());
        existingEntretien.setTypeentretien(entretien.getTypeentretien());
        existingEntretien.setIntervenantRBG(entretien.getIntervenantRBG());
        existingEntretien.setStatutent(entretien.getStatutent());
        existingEntretien.setCv(entretien.getCv());
        return repository.save(existingEntretien);



    }

    public String deleteEntretien(int idfiche) {
        repository.deleteById(idfiche);
        return "entretien supprimé ! " +idfiche;
    }
}
