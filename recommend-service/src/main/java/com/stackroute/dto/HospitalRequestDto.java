package com.stackroute.dto;

import com.stackroute.model.City;
import com.stackroute.model.Doctor;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record HospitalRequestDto(
        @NotBlank(message = "Hospital must have name")
         String hospitalName,
        @NotBlank(message = "Hospital must have website")
         String hospitalWebsite,
        @NotBlank(message = "Hospital must have email")
        @Email(message = "Invalid Email")
         String hospitalEmail,
        @NotBlank(message = "Hospital must have phone number")
         String hospitalPhoneNumber,
        @NotBlank(message = "Hospital must have image")
         String hospitalImageURL,
         String hospitalAmenities,
        @Min(message = "Hospital must have at least one bed",value = 1)
         int numberOfBeds,
        @NotNull(message = "Hospital must have city")
         City city,
        @NotBlank(message = "Hospital must have doctor")
         List<Doctor> doctors
) {
}
