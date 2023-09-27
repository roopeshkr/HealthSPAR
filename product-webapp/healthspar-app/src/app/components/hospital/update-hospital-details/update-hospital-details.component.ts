import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-update-hospital-details',
  templateUrl: './update-hospital-details.component.html',
  styleUrls: ['./update-hospital-details.component.css'],
})
export class UpdateHospitalDetailsComponent implements OnInit {
  hospital: Hospital = {
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
    hospitalAmenities: [],
    numberOfBeds: 0,
    doctors: [],
    specialty: [],
    hospitalId: 0,
  };

  hospitalProfileForm: FormGroup;
  isSubmitted: boolean = false;
  step: number = 1;

  constructor(
    private profileService: HospitalService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.hospitalProfileForm = this.formBuilder.group({
      hospitalName: ['', Validators.required],
      hospitalWebsite: [''],
      hospitalEmail: ['', Validators.email],
      hospitalPhoneNumber: [
        '',
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(10),
        Validators.minLength(10),
      ],
      hospitalImageURL: '',
      hospitalRating: [0, Validators.max(5), Validators.min(0)],
      hospitalReviews: [''],
      city: {
        cityId: 0,
        name: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zip: [
          '',
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      },
      hospitalAmenities: [],
      numberOfBeds: [0, Validators.min(1)],
      doctors: [],
      specialty: [],
    });
  }
  ngOnInit(): void {
    this.getHospital(6);
  }

  get basicDetails() {
    return this.hospitalProfileForm.get('basicDetailForm');
  }
  get addressDetails() {
    return this.hospitalProfileForm.get('addressDetailForm');
  }
  get doctorDetails() {
    return this.hospitalProfileForm.get('doctorDetailForm') as FormArray;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.hospitalProfileForm.valid) {
      this.hospital = { ...this.hospital, ...this.hospitalProfileForm.value };
      this.updateHospital();
      this.route.navigate(['/display-patient-profile']);
    }
  }

  public getHospital(hospitalId: number): void {
    this.profileService.getHospitalProfile(hospitalId).subscribe(
      (response) => {
        this.hospital = response;
        this.hospitalProfileForm.patchValue(this.hospital);
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );
  }

  public updateHospital(): void {
    this.profileService
      .updateHospitalProfile(this.hospital.hospitalId, this.hospital)
      .subscribe(
        (response: Hospital) => {
          console.log('Hospital profile updated successfully: ', response);
        },
        (error) => {
          console.error('Error updating hospital profile:', error);
        }
      );
  }

  removeDoctor() {
    console.log('remove');
  }

  addDoctor() {
    console.log('add');
  }
}
