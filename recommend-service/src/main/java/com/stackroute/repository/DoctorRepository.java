package com.stackroute.repository;

import com.stackroute.model.Doctor;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface DoctorRepository extends Neo4jRepository<Doctor,Long> {
}
