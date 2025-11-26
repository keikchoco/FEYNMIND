package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.ai.vectorstore.JdbcVectorStore;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;

@Configuration
public class vectorconfig {

    @Bean
    public JdbcVectorStore vectorStore(DataSource dataSource) {
        return new JdbcVectorStore(new JdbcTemplate(dataSource));
    }
}
