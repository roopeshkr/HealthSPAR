package com.stackroute.service;

import com.stackroute.exception.DepartmentNotFoundException;
import com.stackroute.model.Department;
import com.stackroute.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
@Slf4j
public class DepartmentServiceImpl implements DepartmentService {
    private final DepartmentRepository departmentRepository;

    @Override
    public Department createSpecialty(Department department) {
        log.info("Creating an specialty :"+ department +" in the database");
        return departmentRepository.save(department);
    }

    @Override
    public Department getSpecialtyById(Long id) {
        log.info("Fetching an specialty with id :"+id+" in the database");
        return departmentRepository.findById(id).orElseThrow(
                ()-> new DepartmentNotFoundException("Speciality not found with id : "+id)
        );
    }

    @Override
    public List<Department> getAllSpecialty() {
        log.info("Fetching all specialty in the database");
        return departmentRepository.findAll();
    }

    @Override
    public boolean deleteSpecialty(Long id) {
        log.info("Deleting an specialty with id :"+id+" in the database");
        if (departmentRepository.existsById(id))
        {
            departmentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Department updateSpecialty(Long id, Department department) {
        log.info("Updating an specialty with id :"+id+" in the database");
        Department existingDepartment =getSpecialtyById(id);
        existingDepartment.setName(department.getName());
        existingDepartment.setDescription(department.getDescription());
        return departmentRepository.save(existingDepartment);
    }
}
