import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
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
    hospitalAmenities: '',
    numberOfBeds: 0,
    doctors: [],
    frequentlyAskedQuestion: []
  };
  

  constructor(
    private hospitalService: HospitalService,
    private route: Router,
    private router:ActivatedRoute
  
  ) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const hospitalId = +params['id'];
    });
    this.getHospitalById(40);
  }

  public getHospitalById(hospitalId: number): void {
    this.hospitalService.getHospitalProfile(hospitalId).subscribe(
      (response: Hospital) => {
        this.hospital = response;
        console.log(this.hospital);

      }
    )
  }

  onEditClick(hospitalId: number,index:number): void {
    this.route.navigate(['/edit-doctor', hospitalId,index]);
  }

  removeDoctor(index:number):void{
    if(index>=0 && index<this.hospital.doctors.length){
      const isConfirmed = window.confirm('Are you sure you want to remove this doctor?');
      if(isConfirmed){
        this.hospital.doctors.splice(index,1);
        this.hospitalService.updateHospitalProfile(this.hospital.hospitalId,this.hospital).subscribe(
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
  

}