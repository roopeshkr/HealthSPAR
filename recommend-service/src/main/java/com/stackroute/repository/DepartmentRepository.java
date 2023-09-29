package com.stackroute.repository;

import com.stackroute.model.Department;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface DepartmentRepository extends Neo4jRepository<Department,Long> {
}
