package com.stackroute.model;

import lombok.*;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Node
public class HospitalImage {
    @Id
    @GeneratedValue
    private Long hospitalImageId;
    private String fileName;
    private String fileType;

    @Column(name = "imageData",unique = false, nullable = false, length = 100000)
    private byte[] imageData;
}
