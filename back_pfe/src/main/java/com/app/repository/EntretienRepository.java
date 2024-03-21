package com.app.repository;

import com.app.entity.Candidat;
import com.app.entity.Entretien;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntretienRepository extends JpaRepository<Entretien, Integer> {
    Entretien findByNometprenom(String nometprenom);
    Page<Entretien> findAll(Pageable pageable);

}
