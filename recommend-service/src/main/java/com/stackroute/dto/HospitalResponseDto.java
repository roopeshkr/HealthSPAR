package com.stackroute.dto;

import com.stackroute.model.City;
import com.stackroute.model.Doctor;

import java.util.List;

public record HospitalResponseDto(
        Long hospitalId,
        String hospitalName,
        String hospitalWebsite,
        String hospitalEmail,
        String hospitalPhoneNumber,
        String hospitalImageURL,
        Double hospitalRating,
        List<String> hospitalReviews,
        String hospitalAmenities,
        int numberOfBeds,
        City city,
        List<Doctor> doctors
) {
}