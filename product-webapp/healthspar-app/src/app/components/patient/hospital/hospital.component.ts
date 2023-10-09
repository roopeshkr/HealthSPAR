import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { HospitalImageService } from 'src/app/service/hospital-image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
})
export class HospitalComponent implements OnInit {
<<<<<<< HEAD
  allHospitals: Hospital[] = [];
  recommendedHospitals: Hospital[] = [];
  selectedCity: string = 'Select City';
  cityOptions: Set<string> = new Set();

  constructor(
    private hospitalService: HospitalService,
    private recommendService: RecommendationService,
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
    this.getAllHospitals();
  }

<<<<<<< HEAD
  public getAllHospitals(): void {
    this.hospitalService.getAllHospitals().subscribe((response: Hospital[]) => {
      this.allHospitals = response;
      console.log('All Hospitals : ', response);

      this.allHospitals.forEach((hospital) => {
        this.cityOptions.add('Select City');
        this.cityOptions.add(hospital.city.name.toLowerCase());
      });

      console.log('city options : ', this.cityOptions);
    });
=======
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
>>>>>>> bf5e039a07c07c68b6e8e5395df53b11f79923f7
  }

  public onCitySelect(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
<<<<<<< HEAD
    this.selectedCity = selectedValue;
    if (selectedValue === 'Select City') {
      this.recommendedHospitals = this.allHospitals;
      console.log('not selected : ', this.recommendedHospitals);
    } else {
      this.getRecommendations(selectedValue);
    }
  }

  public getRecommendations(cityName: string): void {
    this.recommendService
      .getRecommendedHospitals(cityName)
      .subscribe((response: Hospital[]) => {
        this.recommendedHospitals = response;
      });
  }
  onBookClick(hospitalId: number): void {
    this.route.navigate(['/patient/hospital-page', hospitalId]);
  }
=======
    this.selectedCity = selectedValue; 
    if (selectedValue === 'Select City') {
      this.recommendedHospitals = this.allHospitals;
      console.log("not selected : ",this.recommendedHospitals);
      
    } else {
      this.getRecommendations(selectedValue);
    }
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