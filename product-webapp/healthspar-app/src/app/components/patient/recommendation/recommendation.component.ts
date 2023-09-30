import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{
  recommendedHospitals: Hospital[] = [];

  constructor(private recommendService:RecommendationService){}


  ngOnInit(): void {
    this.getRecommendations('chennai');
  }

  public getRecommendations(cityName:string):void{
    this.recommendService.getRecommendedHospitals(cityName).subscribe(
      (response:Hospital[])=>{
        this.recommendedHospitals=response;
        console.log(this.recommendedHospitals);
      }
    )
    
  }

  
  

}
