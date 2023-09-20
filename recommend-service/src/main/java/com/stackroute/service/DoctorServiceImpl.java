package com.stackroute.service;

import com.stackroute.exception.DoctorNotFoundException;
import com.stackroute.model.Doctor;
import com.stackroute.repository.DoctorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DoctorServiceImpl implements DoctorService {
    private final DoctorRepository doctorRepository;
    @Override
    public Doctor createDoctor(Doctor doctor) {
        log.info("Creating an doctor :"+doctor+" in the database");
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor getDoctorById(Long id) {
        log.info("Fetching an doctor with id :"+id+" in the database");
        return doctorRepository.findById(id).orElseThrow(
                ()->new DoctorNotFoundException("Doctor not found with id : "+id)
        );
    }

    @Override
    public List<Doctor> getAllDoctor() {
        log.info("Fetching all doctor in the database");
        return doctorRepository.findAll();
    }

    @Override
    public boolean deleteDoctor(Long id) {
        log.info("Deleting an doctor with id :"+id+" in the database");
        if (doctorRepository.existsById(id))
        {
            doctorRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Doctor updateDoctor(Long id, Doctor doctor) {
        log.info("Updating an doctor with id :"+id+" in the database");
        Doctor existingDoctor=getDoctorById(id);
        existingDoctor.setDoctorName(doctor.getDoctorName());
        existingDoctor.setSpecialization(doctor.getSpecialization());
        existingDoctor.setQualification(doctor.getQualification());
        existingDoctor.setLanguagesSpoken(doctor.getLanguagesSpoken());
        existingDoctor.setYearOfExperience(doctor.getYearOfExperience());
        existingDoctor.setStartTime(doctor.getStartTime());
        existingDoctor.setEndTime(doctor.getEndTime());
        existingDoctor.setBio(doctor.getBio());
        return doctorRepository.save(existingDoctor);
    }
}
