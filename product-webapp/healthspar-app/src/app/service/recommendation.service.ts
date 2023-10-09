import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../model/hospital';

@Injectable({
    providedIn: 'root'
})

export class RecommendationService {
    private apiUrl = 'http://localhost:8086/api/v1/hospital/patient';

    constructor(private http: HttpClient) { }
    
    public getRecommendedHospitals(cityName:string): Observable<Hospital[]> {
        return this.http.get<Hospital[]>(`${this.apiUrl}/${cityName}`);
    }
}