import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital-page',
  templateUrl: './hospital-page.component.html',
  styleUrls: ['./hospital-page.component.css'],
})
export class HospitalPageComponent implements OnInit {
  hospital: Hospital = {
    hospitalId: 0,
    hospitalName: '',
    hospitalWebsite: '',
    hospitalEmail: '',
    hospitalPhoneNumber: '',
    hospitalImageURL: '',
    hospitalRating: 0,
    hospitalReviews: [''],
    city: {
      name: '',
      district: '',
      state: '',
      country: '',
      zip: '',
    },
    hospitalAmenities: [],
    numberOfBeds: 0,
    doctors: [],
    specialty: [],
  };
  isSubmitted:boolean=false;

  constructor(private hospitalService:HospitalService){}

  ngOnInit(): void {
    this.getHospitalById(6)
  }

  public getHospitalById(hospitalId:number):void{
    this.hospitalService.getHospitalProfile(hospitalId).subscribe(
      (response:Hospital)=>{
        this.hospital=response;
        console.log(this.hospital);
        
      }
    )
  }

  onSubmit(){
    this.isSubmitted=true;
    console.log("submited");
    
  }

}