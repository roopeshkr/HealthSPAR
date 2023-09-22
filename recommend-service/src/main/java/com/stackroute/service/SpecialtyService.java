package com.stackroute.service;

import com.stackroute.model.Specialty;

import java.util.List;

public interface SpecialtyService {
    public Specialty createSpecialty(Specialty specialty);
    public Specialty getSpecialtyById(Long id);
    public List<Specialty> getAllSpecialty();
    public boolean deleteSpecialty(Long id);
    public Specialty updateSpecialty(Long id,Specialty specialty);
}
