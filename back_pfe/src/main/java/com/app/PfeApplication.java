package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


@SpringBootApplication
public class PfeApplication {

    public static void main(String[] args) {
        SpringApplication.run(PfeApplication.class, args);
    }

}
