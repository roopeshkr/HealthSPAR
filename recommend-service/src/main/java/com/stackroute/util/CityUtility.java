package com.stackroute.util;

import com.stackroute.dto.CityDto;
import com.stackroute.model.City;
import org.springframework.stereotype.Component;

@Component
public class CityUtility {
    public CityDto toDto(City city)
    {
        return new CityDto(
                city.getCityId(),
                city.getName(),
                city.getDistrict(),
                city.getState(),
                city.getCountry(),
                city.getZip(),
                city.getHospitals()
        );
    }
    public City toEntity(CityDto dto)
    {
        return City
                .builder()
                .cityId(dto.cityId())
                .name(dto.name())
                .district(dto.district())
                .state(dto.state())
                .country(dto.country())
                .zip(dto.zip())
                .hospitals(dto.hospitals())
                .build();
    }
}
