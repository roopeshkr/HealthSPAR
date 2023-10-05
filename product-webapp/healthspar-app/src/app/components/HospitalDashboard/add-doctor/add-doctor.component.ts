import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  hospital: Hospital = {
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
  };

  doctorDetailForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private profileService: HospitalService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.doctorDetailForm = this.formBuilder.group({
      doctorName: ['', Validators.required],
      department: ['', Validators.required],
      qualification: ['', Validators.required],
      languagesSpoken: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      bio: [''],
    });

  }
  
  ngOnInit(): void {
    this.getHospital(40); 
  }

  onSubmit() {
    this.isSubmitted = true;

    const newDoctor = this.doctorDetailForm.value;
    this.hospital.doctors.push(newDoctor);

    this.updateHospital(this.hospital.hospitalId, this.hospital);
    this.route.navigate(['/hospital-home/doctors-list']);
  }

  public getHospital(hospitalId: number): void {
    this.profileService.getHospitalProfile(hospitalId).subscribe(
      (response) => {
        this.hospital = response;
      },
      (error) => {
        console.error('Error fetching hospital:', error);
      }
    );
  }

  public updateHospital(hospitalId: number, hospital: Hospital): void {
    this.profileService
      .updateHospitalProfile(hospitalId, hospital)
      .subscribe(
        (response: Hospital) => {
          console.log('Hospital profile updated successfully: ', response);
        },
        (error) => {
          console.error('Error updating hospital profile:', error);
        }
      );
  }
}
