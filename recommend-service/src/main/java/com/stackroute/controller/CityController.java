package com.stackroute.controller;

import com.stackroute.dto.CityDto;
import com.stackroute.model.City;
import com.stackroute.service.CityService;
import com.stackroute.util.CityUtility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cities")
public class CityController {
    private final CityService cityService;
    private final CityUtility utility;

    @PostMapping
    public ResponseEntity<CityDto> createCity(@Valid @RequestBody CityDto dto){
        var city=utility.toEntity(dto);
        var savedCity=cityService.createCity(city);
        var savedCityDto=utility.toDto(savedCity);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedCityDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CityDto> getCityById(@PathVariable Long id)
    {
        var city=cityService.getCityById(id);
        var cityDto=utility.toDto(city);
        return ResponseEntity.ok(cityDto);
    }

    @GetMapping
    public ResponseEntity<List<CityDto>> getAllCities(){
        List<City> cities=cityService.getAllCities();
        var citiesDto=cities
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(citiesDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CityDto> updateCity(@Valid @PathVariable Long id,@RequestBody CityDto dto){
        City newCity=utility.toEntity(dto);
        newCity.setCityId(id);
        var updatedCity=cityService.updateCity(id,newCity);
        var updatedCityDto=utility.toDto(updatedCity);
        return ResponseEntity.ok(updatedCityDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCity(@PathVariable Long id)
    {
        boolean deleted=cityService.deleteCity(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
