import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-display-hospital-details',
  templateUrl: './display-hospital-details.component.html',
  styleUrls: ['./display-hospital-details.component.css'],
})
export class DisplayHospitalDetailsComponent implements OnInit {
  hospital:Hospital={
    hospitalId: 0,
    hospitalName: '',
    hospitalWebsite: '',
    hospitalEmail: '',
    hospitalPhoneNumber: '',
    hospitalRating: 0,
    hospitalReviews: [],
    hospitalAmenities: '',
    numberOfBeds: 0,
    city: {
      name: '',
      district: '',
      state: '',
      country: '',
      zip: ''
    },
    doctors: [],
    frequentlyAskedQuestion: []
  }

  constructor(private hospitalService:HospitalService,private router:ActivatedRoute,private route:Router){}

  ngOnInit() {
    this.getHospitalById(0);
    const trigger = $('.hamburger');
    const overlay = $('.overlay');
    let isClosed = false;

    trigger.click(() => {
      hamburger_cross();
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    $('[data-toggle="offcanvas"]').click(() => {
      $('#wrapper').toggleClass('toggled');
    });
  }

  onEdit(){
    this.route.navigate(['/hospital/update'])
  }

  public getHospitalById(hospitalId:number):void{
    this.hospitalService.getHospitalProfile(hospitalId).subscribe(
      (response:Hospital)=>{
        this.hospital=response;
        console.log(this.hospital);
      }
    )
  }
}
