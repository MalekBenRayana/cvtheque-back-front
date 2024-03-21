package com.app.service;

import com.app.repository.DemandeRepository;

import com.app.entity.Demande;
import com.app.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository repository;
    @Autowired
    private FileDBRepository fileDBRepository;
    public Demande saveDemande(Demande demandeDto) throws IOException {

        return repository.save(demandeDto);
    }



    public Demande getDemandeByFiliale(String filiale) {
        return  repository.findByFiliale(filiale);

    }

    public Demande getDemandeById(int IdDem) {
        return repository.findById(IdDem).orElse(null);
    }

    public List<Demande> getDemandes() {
        return repository.findAll();
    }


    public Demande updateDemande(Demande demande, int IdDem) {
        Demande existingDemande= repository.findById(IdDem).orElse(null);
        existingDemande.setFiliale(demande.getFiliale());
        existingDemande.setDate(demande.getDate());
        existingDemande.setPoste(demande.getPoste());
        existingDemande.setDescription(demande.getDescription());
        existingDemande.setService(demande.getService());
        existingDemande.setMotif(demande.getMotif());
        existingDemande.setDateEmb(demande.getDateEmb());
        existingDemande.setStatut(demande.getStatut());
        existingDemande.setDemande(demande.getDemande());


        return repository.save(existingDemande);
    }

    public String deleteDemande(int IdDem) {
        repository.deleteById(IdDem);
        return "demande supprimée ! " +IdDem;
    }

    public List<Demande> saveDemandes(List<Demande> demandes) {
        return repository.saveAll(demandes);
    }
}
