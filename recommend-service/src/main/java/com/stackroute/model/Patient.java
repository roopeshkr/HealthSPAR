package com.stackroute.model;

import lombok.*;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Node
public class Patient {
    @Id
    @GeneratedValue
    private Long patientId;

    @Relationship(type = "LOCATED_IN",direction=Relationship.Direction.OUTGOING)
    private City city;
}
