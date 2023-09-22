package com.stackroute.service;

import com.stackroute.model.City;

import java.util.List;

public interface CityService {
    public City createCity(City city);
    public City getCityById(Long id);
    public List<City> getAllCities();
    public boolean deleteCity(Long id);
    public City updateCity(Long id,City city);
}
