import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../model/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getAllHospitals():Observable<Hospital[]>{
    return this.http.get<Hospital[]>(`${this.apiUrl}/hospitals`);
  }

  public addHospitalProfile(hospital:Hospital):Observable<Hospital>{
    return this.http.post<Hospital>(`${this.apiUrl}/hospitals`,hospital,this.httpOptions);
  }

  public updateHospitalProfile(hospitalId:number,hospital:Hospital):Observable<Hospital>{
    return this.http.post<Hospital>(`${this.apiUrl}/hospitals/${hospitalId}`,hospital,this.httpOptions);
  }

  public getHospitalProfile(hospitalId:number):Observable<Hospital>{
    return this.http.get<Hospital>(`${this.apiUrl}/hospitals/${hospitalId}`);
  }
}
