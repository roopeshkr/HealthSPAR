package com.stackroute.util;

import com.stackroute.dto.HospitalRequestDto;
import com.stackroute.dto.HospitalResponseDto;
import com.stackroute.model.Hospital;
import org.springframework.stereotype.Component;

@Component
public class HospitalResponseUtility {
    public HospitalResponseDto toDto(Hospital hospital)
    {
        return new HospitalResponseDto(
                hospital.getHospitalId(),
                hospital.getHospitalName(),
                hospital.getHospitalWebsite(),
                hospital.getHospitalEmail(),
                hospital.getHospitalPhoneNumber(),
                hospital.getHospitalImageURL(),
                hospital.getHospitalRating(),
                hospital.getHospitalReviews(),
                hospital.getHospitalAmenities(),
                hospital.getNumberOfBeds(),
                hospital.getCity(),
                hospital.getDoctors(),
                hospital.getFrequentlyAskedQuestion()
        );
    }

    public Hospital toEntity(HospitalResponseDto dto){
        return Hospital
                .builder()
                .hospitalName(dto.hospitalName())
                .hospitalWebsite(dto.hospitalWebsite())
                .hospitalEmail(dto.hospitalEmail())
                .hospitalPhoneNumber(dto.hospitalPhoneNumber())
                .hospitalImageURL(dto.hospitalImageURL())
                .hospitalRating(dto.hospitalRating())
                .hospitalReviews(dto.hospitalReviews())
                .hospitalAmenities(dto.hospitalAmenities())
                .numberOfBeds(dto.numberOfBeds())
                .city(dto.city())
                .doctors(dto.doctors())
                .frequentlyAskedQuestion(dto.frequentlyAskedQuestion())
                .build();
    }
}
