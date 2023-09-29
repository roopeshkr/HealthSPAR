package com.stackroute.util;

import com.stackroute.dto.DoctorDto;
import com.stackroute.model.Doctor;
import org.springframework.stereotype.Component;

@Component
public class DoctorUtility {
    public DoctorDto toDto(Doctor doctor)
    {
        return new DoctorDto(
                doctor.getDoctorId(),
                doctor.getDoctorName(),
                doctor.getDepartments(),
                doctor.getQualification(),
                doctor.getLanguagesSpoken(),
                doctor.getYearOfExperience(),
                doctor.getStartTime(),
                doctor.getEndTime(),
                doctor.getBio()
        );
    }

    public Doctor toEntity(DoctorDto dto)
    {
        return Doctor
                .builder()
                .doctorId(dto.doctorId())
                .doctorName(dto.doctorName())
                .departments(dto.departments())
                .qualification(dto.qualification())
                .languagesSpoken(dto.languagesSpoken())
                .yearOfExperience(dto.yearOfExperience())
                .startTime(dto.startTime())
                .endTime(dto.endTime())
                .bio(dto.bio())
                .build();
    }
}
