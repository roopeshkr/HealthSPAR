package com.stackroute.service;

import com.stackroute.exception.HospitalNotFoundException;
import com.stackroute.model.Hospital;
import com.stackroute.repository.HospitalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HospitalServiceImpl implements HospitalService {
    private final HospitalRepository hospitalRepository;
    @Override
    public Hospital createHospital(Hospital hospital) {
        return hospitalRepository.save(hospital);
    }

    @Override
    public Hospital getHospitalById(Long id) {
        return hospitalRepository.findById(id).orElseThrow(
                ()->new HospitalNotFoundException("Hospital not found with id : "+id)
        );
    }

    @Override
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }

    @Override
    public boolean deleteHospital(Long id) {
        if (hospitalRepository.existsById(id))
        {
            hospitalRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Hospital updateHospital(Long id, Hospital hospital) {
        Hospital existingHospital=getHospitalById(id);
        existingHospital.setName(hospital.getName());
        existingHospital.setEmail(hospital.getEmail());
        existingHospital.setCity(hospital.getCity());
        existingHospital.setRating(hospital.getRating());
        existingHospital.setSpeciality(hospital.getSpeciality());
        existingHospital.setImageURL(hospital.getImageURL());
        return hospitalRepository.save(existingHospital);
    }
}
