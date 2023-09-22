package com.stackroute.controller;

import com.stackroute.model.Hospital;
import com.stackroute.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/recommendations")
public class RecommendationController {
    private final RecommendationService recommendationService;

    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<Hospital>> getRecommendedHospitals(@PathVariable Long patientId)
    {
        List<Hospital> recommendedHospitals=recommendationService.recommendHospitalsForPatient(patientId);
        return ResponseEntity.ok(recommendedHospitals);
    }



}
