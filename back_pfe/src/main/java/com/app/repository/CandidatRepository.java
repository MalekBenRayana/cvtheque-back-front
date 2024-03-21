package com.app.repository;

import com.app.entity.Candidat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CandidatRepository extends JpaRepository<Candidat, Integer> {
     Candidat findByNom(String nom);

     Page<Candidat> findAll(Pageable pageable);
}
