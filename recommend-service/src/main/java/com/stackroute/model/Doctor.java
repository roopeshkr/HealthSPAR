package com.stackroute.model;

import lombok.*;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.time.LocalTime;

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
    private String doctorImageUrl;
    private String department;
    private String qualification;
    private String languagesSpoken;
    private int yearOfExperience;
    private LocalTime startTime;
    private LocalTime endTime;
    private String bio;
}
