package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ai.openai.OpenAiChatClient;
import org.springframework.ai.vectorstore.JdbcVectorStore;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.document.Document;

import java.util.*;

@Service
public class RAG {

    @Autowired
    private JdbcVectorStore vectorStore;

    @Autowired
    private OpenAiChatClient client;

    public void saveEmbeddings(String text) {
        List<Document> chunks = chunk(text);
        vectorStore.add(chunks);
    }

    public String summarize(String text) {
        Prompt prompt = new Prompt("Summarize the following in simple terms:\n" + text);
        ChatResponse response = client.call(prompt);
        return response.getResult().getOutputText();
    }

    public String ask(String question) {

        List<Document> docs = vectorStore.similaritySearch(question);

        StringBuilder context = new StringBuilder();
        docs.forEach(d -> context.append(d.getContent()).append("\n"));

        Prompt prompt = new Prompt("""
            Use this context to answer the question:
            %s

            Question: %s
            Answer:
        """.formatted(context, question));

        ChatResponse response = client.call(prompt);
        return response.getResult().getOutputText();
    }

    private List<Document> chunk(String text) {
        List<Document> list = new ArrayList<>();
        int size = 500;

        for (int i = 0; i < text.length(); i += size) {
            int end = Math.min(i + size, text.length());
            list.add(new Document(text.substring(i, end)));
        }
        return list;
    }
}
