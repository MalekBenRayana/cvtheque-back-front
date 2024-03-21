package com.app.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Table(name = "files")
@AllArgsConstructor
@Data
public class FileDB {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String name;
    private String type;
    @Basic(fetch = FetchType.LAZY)
    @Lob
    @Column(length = 104857600, nullable = false)
    private byte[] data;

    public FileDB() {
    }
}
