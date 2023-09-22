import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{
  recommendedHospitals: Hospital[] = [];

  constructor(private recommendService:RecommendationService){}


  ngOnInit(): void {
    this.getRecommendations(7);
  }

  public getRecommendations(patientId:number):void{
    this.recommendService.getRecommendedHospitals(patientId).subscribe(
      (response:Hospital[])=>{
        this.recommendedHospitals=response;
        console.log(this.recommendedHospitals);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
    console.log(this.recommendedHospitals);
    
  }
  
  

}
