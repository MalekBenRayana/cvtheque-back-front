package com.app.repository;

import com.app.entity.Entretien;
import com.app.entity.Interviewer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterviewerRepository extends JpaRepository<Interviewer, Integer> {
    Interviewer findByFirstNameAndLastName(String firstName, String lastName);
    Page<Interviewer> findAll(Pageable pageable);

}
