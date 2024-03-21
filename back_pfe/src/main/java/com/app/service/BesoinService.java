package com.app.service;


import com.app.entity.Besoin;
import com.app.entity.Candidat;
import com.app.entity.Demande;
import com.app.repository.BesoinRepository;
import com.app.repository.DemandeRepository;
import com.app.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BesoinService {

    @Autowired
    private BesoinRepository repository;
    @Autowired
    private FileDBRepository fileDBRepository;
    public Besoin saveBesoin(Besoin besoinDto) {
        return repository.save(besoinDto);
    }


    public List<Besoin> getBesoins() {return repository.findAll();
    }

    public Besoin getBesoinById(int idBesoin) {
        return repository.findById(idBesoin).orElse(null);
    }


    public Besoin updateBesoin(Besoin besoin, int idBesoin){
        Besoin existingBesoin= repository.findById(idBesoin).orElse(null);
        existingBesoin.setFilBesoin(besoin.getFilBesoin());
        existingBesoin.setDate(besoin.getDate());
        existingBesoin.setPosteBesoin(besoin.getPosteBesoin());
        existingBesoin.setDescPoste(besoin.getDescPoste());
        existingBesoin.setService(besoin.getService());
        existingBesoin.setMotifBesoin(besoin.getMotifBesoin());
        existingBesoin.setDate(besoin.getDate());
        existingBesoin.setStatBesoin(besoin.getStatBesoin());
        existingBesoin.setBesoin(besoin.getBesoin());
        return repository.save(existingBesoin);


    }


    public String deleteBesoin(int idbesoin) {
        repository.deleteById(idbesoin);
        return "besoin supprimé ! " +idbesoin;
    }

    public List<Besoin> savebesoins(List<Besoin> besoins) {
        return repository.saveAll(besoins);
    }


    public Besoin getBesoinByfilBesoin(String filBesoin) {
        return  repository.findByfilBesoin(filBesoin);
    }
}
