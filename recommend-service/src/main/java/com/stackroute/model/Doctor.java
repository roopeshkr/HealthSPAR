package com.stackroute.model;

import lombok.*;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Node
public class Doctor {
    @Id
    @GeneratedValue
    private Long doctorId;
    private String doctorName;
    @Relationship(type = "SPECIALIZES_IN",direction = Relationship.Direction.OUTGOING)
    private List<Department> departments;
    private List<String> qualification;
    private List<String> languagesSpoken;
    private int yearOfExperience;
    private LocalTime startTime;
    private LocalTime endTime;
    private String bio;
}
