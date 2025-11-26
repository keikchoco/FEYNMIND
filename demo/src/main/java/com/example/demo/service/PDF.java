package com.example.demo.service;

import com.example.demo.model.PDF;
import com.example.demo.repository.PDFRepository;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PDF {

    @Autowired
    private PDFRepository pdfRepo;

    public String extract(MultipartFile file) {
        try (PDDocument doc = PDDocument.load(file.getInputStream())) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(doc);
        } catch (Exception e) {
            throw new RuntimeException("Failed to read PDF", e);
        }
    }

    public String clean(String raw) {
        return raw.replace("\n", " ")
                  .replaceAll("\\s+", " ")
                  .trim();
    }

    public Long savePDF(String filename, String content) {
        PDF pdf = new PDF();
        pdf.setFilename(filename);
        pdf.setContent(content);
        pdfRepo.save(pdf);
        return pdf.getId();
    }
}
