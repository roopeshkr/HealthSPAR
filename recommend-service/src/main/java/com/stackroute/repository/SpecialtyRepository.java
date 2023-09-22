package com.stackroute.repository;

import com.stackroute.model.Specialty;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface SpecialtyRepository extends Neo4jRepository<Specialty,Long> {
}
