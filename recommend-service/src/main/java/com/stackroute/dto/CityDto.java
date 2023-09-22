package com.stackroute.dto;

import com.stackroute.model.Hospital;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import java.util.List;

public record CityDto(
        Long cityId,
        @NotBlank(message = "City must have a name")
        String name,
        @NotBlank(message = "City must have a district name")
        String district,
        @NotBlank(message = "City must have a state name")
        String state,
        @NotBlank(message = "City must have a country name")
        String country,
        @NotBlank(message = "City must have a zip code")
        @Pattern(regexp = "\\d{6}", message = "Zip code must have exactly 6 digits")
        String zip,
        List<Hospital> hospitals

) {
}
