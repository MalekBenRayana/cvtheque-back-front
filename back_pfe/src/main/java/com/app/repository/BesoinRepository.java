package com.app.repository;

import com.app.entity.Besoin;
import com.app.entity.Candidat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BesoinRepository extends JpaRepository<Besoin, Integer> {

    Page<Besoin> findAll(Pageable pageable);

    Besoin findByfilBesoin(String filBesoin);
}
