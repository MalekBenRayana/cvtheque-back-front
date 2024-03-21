package com.app.service;


import com.app.dto.CandidatDto;
import com.app.entity.Candidat;
import com.app.entity.FileDB;
import com.app.repository.CandidatRepository;
import com.app.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;


@Service
public class CandidatService {
    @Autowired
    private CandidatRepository repository;
    @Autowired
    private FileDBRepository fileDBRepository;

    public Candidat saveCandidat(Candidat candidatDto) throws IOException {

        //Candidat candidat = candidatFromCandidatDto(candidatDto);


        return repository.save(candidatDto);
    }

//    private Candidat candidatFromCandidatDto(CandidatDto candidatDto) throws IOException {
//        FileDB fileDB = new FileDB(candidatDto.getCv().getName(), candidatDto.getCv().getContentType(), candidatDto.getCv().getBytes());
//
//        return new Candidat(candidatDto.getNom(), candidatDto.getAge(), candidatDto.getSf(), candidatDto.getFormation(),
//                candidatDto.getProfil(), candidatDto.getTotal(), candidatDto.getAdresse(), candidatDto.getDemande(),
//                candidatDto.getSource(), candidatDto.getNature(), fileDBRepository.save(fileDB));
//    }


    public List<Candidat> saveCandidats(List<Candidat> candidats){
        return repository.saveAll(candidats);
    }

    public List<Candidat> getCandidats(){
        return repository.findAll();
    }

    public Candidat getCandidatById(int identifiant){
        return repository.findById(identifiant).orElse(null);
    }

    public Candidat getCandidatByNom(String nom){
        return  repository.findByNom(nom);
    }

    public String deleteCandidat (int identifiant){
        repository.deleteById(identifiant);
        return "candidat supprimé ! " +identifiant;
    }

    public Candidat updateCandidat(Candidat candidat, int identifiant){
        Candidat existingCandidat= repository.findById(identifiant).orElse(null);
        existingCandidat.setNom(candidat.getNom());
        existingCandidat.setAge(candidat.getAge());
        existingCandidat.setSf(candidat.getSf());
        existingCandidat.setFormation(candidat.getFormation());
        existingCandidat.setProfil(candidat.getProfil());
        existingCandidat.setTotal(candidat.getTotal());
        existingCandidat.setAdresse(candidat.getAdresse());
        existingCandidat.setDemande(candidat.getDemande());
        existingCandidat.setSource(candidat.getSource());
        existingCandidat.setNature(candidat.getNature());
        existingCandidat.setCv(candidat.getCv());
        return repository.save(existingCandidat);
    }



}