package com.stackroute.util;

import com.stackroute.dto.HospitalDto;
import com.stackroute.model.Hospital;
import org.springframework.stereotype.Component;

@Component
public class HospitalUtility {
    public HospitalDto toDto(Hospital hospital)
    {
        return new HospitalDto(
                hospital.getId(),
                hospital.getName(),
                hospital.getEmail(),
                hospital.getCity(),
                hospital.getImageURL(),
                hospital.getRating(),
                hospital.getSpeciality()
        );
    }

    public Hospital toEntity(HospitalDto dto){
        return Hospital
                .builder()
                .id(dto.id())
                .name(dto.name())
                .email(dto.email())
                .city(dto.city())
                .imageURL(dto.imageURL())
                .rating(dto.rating())
                .speciality(dto.speciality())
                .build();
    }
}
