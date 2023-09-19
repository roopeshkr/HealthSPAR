package com.stackroute.model;

import lombok.*;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Node
public class Hospital {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String city;
    private String imageURL;
    private Double rating;
    private List<String> speciality;
}
