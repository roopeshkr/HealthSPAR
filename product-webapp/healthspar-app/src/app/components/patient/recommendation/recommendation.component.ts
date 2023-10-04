import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { Router } from '@angular/router';
import { HospitalImageService } from 'src/app/service/hospital-image.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{
  recommendedHospitals: Hospital[] = [];
  image:any

  constructor(private recommendService:RecommendationService,private route:Router,private imageService:HospitalImageService){}


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

  onBookClick(hospitalId: number): void {
    this.route.navigate(['/hospital-page', hospitalId]);
  }


  showHospital(fileName:string):void{
    this.imageService.showHospitalImage(fileName);
  }

  
  

}
