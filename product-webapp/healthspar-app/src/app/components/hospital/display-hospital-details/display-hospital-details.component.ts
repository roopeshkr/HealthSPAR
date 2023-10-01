import { Component, OnInit } from '@angular/core';
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
    hospitalImageURL: '',
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
    doctors: []
  }

  constructor(private hospitalService:HospitalService){}

  ngOnInit() {
    this.getHospitalById(3);
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

  public getHospitalById(hospitalId:number):void{
    this.hospitalService.getHospitalProfile(hospitalId).subscribe(
      (response:Hospital)=>{
        this.hospital=response;
        console.log(this.hospital);
      }
    )
  }
}
