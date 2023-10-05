import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  constructor(private route:Router,private router:ActivatedRoute){}
  index:number=0;
  hospitalId:number=0;

  ngOnInit(): void {
    this.router.params.subscribe(
      (params)=>{
        const index= +params['id'];
        const hospitalId= +params['hospitalId'];
        this.index=index;
        this.hospitalId=hospitalId
      }
    )
  }
}
