package com.example.demo.controller;

import com.example.demo.service.PDF;
import com.example.demo.service.RAG;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/learn")
public class LearningController {

    @Autowired
    private PDF pdfService;

    @Autowired
    private RAG ragService;

    @PostMapping("/upload")
    public String uploadPdf(@RequestParam("file") MultipartFile file) {

        String extracted = pdfService.extract(file);
        String cleaned = pdfService.clean(extracted);

        Long id = pdfService.savePDF(file.getOriginalFilename(), cleaned);

        ragService.saveEmbeddings(cleaned);

        String summary = ragService.summarize(cleaned);

        return """
                PDF Saved with ID: %d

                Summary:
                %s
            """.formatted(id, summary);
    }

    @GetMapping("/ask")
    public String ask(@RequestParam("q") String question) {
        return ragService.ask(question);
    }
}
