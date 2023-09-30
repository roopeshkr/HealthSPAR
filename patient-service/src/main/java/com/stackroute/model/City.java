package com.stackroute.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "patient_city")
public class City {
    @MongoId
    private String cityId;
    private String cityName;
    private String district;
    private String state;
    private String country;
    private String zip;
}
