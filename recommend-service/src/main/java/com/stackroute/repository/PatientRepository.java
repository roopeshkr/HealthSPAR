package com.stackroute.repository;

import com.stackroute.model.Patient;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface PatientRepository extends Neo4jRepository<Patient,Long> {
}
