package com.stackroute.service;

import com.stackroute.exception.CityNotFoundException;
import com.stackroute.model.City;
import com.stackroute.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
@Slf4j
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;

    @Override
    public City createCity(City city) {
        log.info("Creating an city :"+city+" in the database");
        return cityRepository.save(city);
    }

    @Override
    public City getCityById(Long id) {
        log.info("Fetching an city with id :"+id+" in the database");
        return cityRepository.findById(id).orElseThrow(
                ()->new CityNotFoundException("City not found with id : "+id+" in the database")
        );
    }

    @Override
    public List<City> getAllCities() {
        log.info("Fetching all city in the database");
        return cityRepository.findAll();
    }

    @Override
    public boolean deleteCity(Long id) {
        log.info("Deleting an city with id :"+id+" in the database");
        if (cityRepository.existsById(id)){
            cityRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public City updateCity(Long id, City city) {
        log.info("Updating an city with id :"+id+" in the database");
        City existingCity=getCityById(id);
        existingCity.setName(city.getName());
        existingCity.setDistrict(city.getDistrict());
        existingCity.setState(city.getState());
        existingCity.setCountry(city.getCountry());
        existingCity.setZip(city.getZip());
        return cityRepository.save(existingCity);
    }
}
