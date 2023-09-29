package com.stackroute.util;

import com.stackroute.dto.DepartmentDto;
import com.stackroute.model.Department;
import org.springframework.stereotype.Component;

@Component
public class DepartmentUtility {
    public DepartmentDto toDto(Department department)
    {
        return new DepartmentDto(
                department.getId(),
                department.getName(),
                department.getDescription()
        );
    }

    public Department toEntity(DepartmentDto dto)
    {
        return Department
                .builder()
                .id(dto.id())
                .name(dto.name())
                .description(dto.description())
                .build();
    }
}
