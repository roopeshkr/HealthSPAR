package com.stackroute.dto;

import com.stackroute.model.City;
import com.stackroute.model.Department;
import com.stackroute.model.Doctor;
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
        String hospitalImageURL,
        Double hospitalRating,
        List<String> hospitalReviews,
        @NotNull(message = "Hospital must have a city")
        City city,

        List<String> hospitalAmenities,
        @Min(value = 0, message = "Hospital must have number of beds")
        int numberOfBeds,
        List<Doctor> doctors,
        List<Department> department
) {
}
