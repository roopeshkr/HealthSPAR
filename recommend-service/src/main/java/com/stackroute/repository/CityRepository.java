package com.stackroute.repository;

import com.stackroute.model.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface CityRepository extends Neo4jRepository<City,Long> {
}
