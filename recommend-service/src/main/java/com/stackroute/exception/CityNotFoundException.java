package com.stackroute.exception;

public class CityNotFoundException extends RuntimeException {
    public CityNotFoundException(String s) {
        super(s);
    }
}
