package com.app.repository;


import com.app.entity.Candidat;
import com.app.entity.Demande;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeRepository extends JpaRepository<Demande, Integer> {
    Demande findByFiliale(String filiale);
    Page<Demande> findAll(Pageable pageable);

}
