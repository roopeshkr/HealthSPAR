package com.stackroute.repository;

import com.stackroute.model.Hospital;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

import java.util.List;

public interface HospitalRepository extends Neo4jRepository<Hospital,Long> {

}
