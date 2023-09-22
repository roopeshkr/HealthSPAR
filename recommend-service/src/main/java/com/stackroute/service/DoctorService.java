package com.stackroute.service;

import com.stackroute.model.Doctor;

import java.util.List;

public interface DoctorService {
    public Doctor createDoctor(Doctor doctor);
    public Doctor getDoctorById(Long id);
    public List<Doctor> getAllDoctor();
    public boolean deleteDoctor(Long id);
    public Doctor updateDoctor(Long id,Doctor doctor);
}
