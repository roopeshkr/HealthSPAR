package com.stackroute.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CityDto {
    private String cityId;
    private String cityName;
    private String district;
    private String state;
    private String country;
    private String zip;
}
