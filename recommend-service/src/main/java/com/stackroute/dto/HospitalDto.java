package com.stackroute.dto;

import com.stackroute.model.City;
import com.stackroute.model.Doctor;
import com.stackroute.model.Specialty;
import jakarta.validation.constraints.*;

import java.util.List;

public record HospitalDto(
        Long hospitalId,
        @NotBlank(message = "Hospital must have a name")
        String hospitalName,
        String hospitalWebsite,
        @Email
        String hospitalEmail,
        @NotBlank(message = "Hospital must have a phone number")
        String hospitalPhoneNumber,
        @NotBlank(message = "Hospital must have a image")
        String hospitalImageURL,
        Double hospitalRating,
        List<String> hospitalReviews,
        @NotNull(message = "Hospital must have a city")
        City city,
        @NotEmpty(message = "Hospital must have at least one amenities")
        List<String> hospitalAmenities,
        @Min(value = 0, message = "Hospital must have number of beds")
        int numberOfBeds,
        @NotEmpty(message = "Hospital must have doctors")
        List<Doctor> doctors,
        List<Specialty> specialty
) {
}
