package com.app.service;


import com.app.entity.Candidat;
import com.app.entity.FileDB;
import com.app.repository.CandidatRepository;
import com.app.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;


@Service
public class FileStorageService {
    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB saveFileDB(FileDB fileDB) throws IOException {
        return fileDBRepository.save(fileDB);
    }

}