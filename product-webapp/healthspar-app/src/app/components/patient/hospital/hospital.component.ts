import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { RecommendationService } from 'src/app/service/recommendation.service';
import { HospitalImageService } from 'src/app/service/hospital-image.service';
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
=======
import { RecommendationService } from 'src/app/service/recommendation.service';
import { HospitalImageService } from 'src/app/service/hospital-image.service';
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
})
export class HospitalComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
  hospital: Hospital = {
    hospitalId: 0,
    hospitalName: '',
    hospitalWebsite: '',
    hospitalEmail: '',
    hospitalPhoneNumber: '',
    hospitalRating: 0,
    hospitalReviews: [''],
    city: {
      name: '',
      district: '',
      state: '',
      country: '',
      zip: '',
    },
    hospitalAmenities: '',
    numberOfBeds: 0,
    doctors: [],
    frequentlyAskedQuestion: [],
  };
  dbImage: string = 'http://localhost:8070/api/v1/hospital/get/doctor/image/';

  constructor(
    private hospitalService: HospitalService,
=======
  allHospitals:Hospital[]=[];
  recommendedHospitals: Hospital[] = [];
  selectedCity:string="Select City";
  cityOptions:Set<string>=new Set();

  constructor(
    private hospitalService: HospitalService,
    private recommendService:RecommendationService,
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
=======
  allHospitals:Hospital[]=[];
  recommendedHospitals: Hospital[] = [];
  selectedCity:string="Select City";
  cityOptions:Set<string>=new Set();

  constructor(
    private hospitalService: HospitalService,
    private recommendService:RecommendationService,
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    this.router.params.subscribe((params) => {
      const hospitalId = +params['id'];
    });
    this.getHospitalById(0);
  }

  public getHospitalById(hospitalId: number): void {
    this.hospitalService
      .getHospitalProfile(hospitalId)
      .subscribe((response: Hospital) => {
        this.hospital = response;
        console.log(this.hospital);
      });
  }

  onEditClick(hospitalId: number, index: number): void {
    this.route.navigate(['/edit-doctor', hospitalId, index]);
  }

  removeDoctor(index: number): void {
    if (index >= 0 && index < this.hospital.doctors.length) {
      const isConfirmed = window.confirm(
        'Are you sure you want to remove this doctor?'
      );
      if (isConfirmed) {
        this.hospital.doctors.splice(index, 1);
        this.hospitalService
          .updateHospitalProfile(this.hospital.hospitalId, this.hospital)
          .subscribe(
            (response: Hospital) => {
              console.log('Doctor removed successfully:', response);
            },
            (error) => {
              console.error('Error removing doctor:', error);
            }
          );
      }
    }
  }

  onClickDoctor(hospitalId: number, index: number): void {
    this.route.navigate(['/hospital-page', hospitalId, index]);
  }
=======
=======
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
    this.getAllHospitals();
  }

  public getAllHospitals():void{
    this.hospitalService.getAllHospitals().subscribe(
      (response:Hospital[])=>{
        this.allHospitals=response;
        console.log("All Hospitals : ",response);
        
        
        this.allHospitals.forEach(
          (hospital)=>{
            this.cityOptions.add('Select City');
            this.cityOptions.add(hospital.city.name.toLowerCase())
          }
          )

        console.log("city options : ",this.cityOptions);
        
      }
    )
  }

  public onCitySelect(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCity = selectedValue; 
    if (selectedValue === 'Select City') {
      this.recommendedHospitals = this.allHospitals;
      console.log("not selected : ",this.recommendedHospitals);
      
    } else {
      this.getRecommendations(selectedValue);
    }
<<<<<<< HEAD
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
=======
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
}


  public getRecommendations(cityName: string): void {
    this.recommendService.getRecommendedHospitals(cityName).subscribe(
      (response: Hospital[]) => {
        this.recommendedHospitals = response;
      }
    )

  }
  onBookClick(hospitalId: number): void {
    this.route.navigate(['/patient/hospital-page', hospitalId]);
  }

}