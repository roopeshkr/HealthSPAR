package com.stackroute.service;

import com.stackroute.model.Hospital;
import com.stackroute.model.Patient;

import java.util.List;

public interface HospitalService {
    public Hospital createHospital(Hospital hospital);
    public Hospital getHospitalById(Long id);
    public List<Hospital> getAllHospitals();
    public boolean deleteHospital(Long id);
    public Hospital updateHospital(Long id,Hospital hospital);
}
