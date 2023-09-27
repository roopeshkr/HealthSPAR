package com.stackroute.service;

import com.stackroute.model.Department;

import java.util.List;

public interface DepartmentService {
    public Department createSpecialty(Department department);
    public Department getSpecialtyById(Long id);
    public List<Department> getAllSpecialty();
    public boolean deleteSpecialty(Long id);
    public Department updateSpecialty(Long id, Department department);
}
