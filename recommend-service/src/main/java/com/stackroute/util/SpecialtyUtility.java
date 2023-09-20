package com.stackroute.util;

import com.stackroute.dto.SpecialtyDto;
import com.stackroute.model.Specialty;
import org.springframework.stereotype.Component;

@Component
public class SpecialtyUtility {
    public SpecialtyDto toDto(Specialty specialty)
    {
        return new SpecialtyDto(
                specialty.getId(),
                specialty.getName(),
                specialty.getDescription()
        );
    }

    public Specialty toEntity(SpecialtyDto dto)
    {
        return Specialty
                .builder()
                .id(dto.id())
                .name(dto.name())
                .description(dto.description())
                .build();
    }
}
