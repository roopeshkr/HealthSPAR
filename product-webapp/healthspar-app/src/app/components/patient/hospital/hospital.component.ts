import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
})
export class HospitalComponent implements OnInit {
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
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
}
