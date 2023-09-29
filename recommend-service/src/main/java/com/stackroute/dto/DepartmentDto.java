package com.stackroute.dto;

import jakarta.validation.constraints.NotBlank;

public record DepartmentDto(
        Long id,
        String name,
        String description
) {
}
