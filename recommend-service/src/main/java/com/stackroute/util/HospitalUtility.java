package com.stackroute.util;

import com.stackroute.dto.HospitalDto;
import com.stackroute.model.Hospital;
import org.springframework.stereotype.Component;

@Component
public class HospitalUtility {
    public HospitalDto toDto(Hospital hospital)
    {
        return new HospitalDto(
                hospital.getHospitalId(),
                hospital.getHospitalName(),
                hospital.getHospitalWebsite(),
                hospital.getHospitalEmail(),
                hospital.getHospitalPhoneNumber(),
                hospital.getHospitalImageURL(),
                hospital.getHospitalRating(),
                hospital.getHospitalReviews(),
                hospital.getCity(),
                hospital.getHospitalAmenities(),
                hospital.getNumberOfBeds(),
                hospital.getDoctors(),
                hospital.getSpecialty()
        );
    }

    public Hospital toEntity(HospitalDto dto){
        return Hospital
                .builder()
                .hospitalId(dto.hospitalId())
                .hospitalName(dto.hospitalName())
                .hospitalWebsite(dto.hospitalWebsite())
                .hospitalEmail(dto.hospitalEmail())
                .hospitalPhoneNumber(dto.hospitalPhoneNumber())
                .hospitalImageURL(dto.hospitalImageURL())
                .hospitalRating(dto.hospitalRating())
                .hospitalReviews(dto.hospitalReviews())
                .city(dto.city())
                .hospitalAmenities(dto.hospitalAmenities())
                .numberOfBeds(dto.numberOfBeds())
                .doctors(dto.doctors())
                .specialty(dto.specialty())
                .build();
    }
}
