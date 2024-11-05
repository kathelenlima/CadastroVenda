package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Matricula;
import com.example.demo.repositories.MatriculaRepository;

@RestController
@RequestMapping("/matriculas")
@CrossOrigin(origins = "http://localhost:3000")
public class MatriculaController {

    @Autowired
    private MatriculaRepository matriculaRepository;

    @PostMapping("/adicionar")
    public Matricula adicionarMatricula(@RequestBody Matricula matricula) {
        return matriculaRepository.save(matricula);
    }
}
