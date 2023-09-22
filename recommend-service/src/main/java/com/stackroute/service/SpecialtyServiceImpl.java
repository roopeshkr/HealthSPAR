package com.stackroute.service;

import com.stackroute.exception.SpecialtyNotFoundException;
import com.stackroute.model.Specialty;
import com.stackroute.repository.SpecialtyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
@Slf4j
public class SpecialtyServiceImpl implements SpecialtyService {
    private final SpecialtyRepository specialtyRepository;

    @Override
    public Specialty createSpecialty(Specialty specialty) {
        log.info("Creating an specialty :"+specialty+" in the database");
        return specialtyRepository.save(specialty);
    }

    @Override
    public Specialty getSpecialtyById(Long id) {
        log.info("Fetching an specialty with id :"+id+" in the database");
        return specialtyRepository.findById(id).orElseThrow(
                ()-> new SpecialtyNotFoundException("Speciality not found with id : "+id)
        );
    }

    @Override
    public List<Specialty> getAllSpecialty() {
        log.info("Fetching all specialty in the database");
        return specialtyRepository.findAll();
    }

    @Override
    public boolean deleteSpecialty(Long id) {
        log.info("Deleting an specialty with id :"+id+" in the database");
        if (specialtyRepository.existsById(id))
        {
            specialtyRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Specialty updateSpecialty(Long id, Specialty specialty) {
        log.info("Updating an specialty with id :"+id+" in the database");
        Specialty existingSpecialty=getSpecialtyById(id);
        existingSpecialty.setName(specialty.getName());
        existingSpecialty.setDescription(specialty.getDescription());
        return specialtyRepository.save(existingSpecialty);
    }
}
