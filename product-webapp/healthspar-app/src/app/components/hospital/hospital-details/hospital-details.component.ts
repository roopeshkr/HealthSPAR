import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css'],
})
export class HospitalDetailsComponent {
  hospitalProfileForm: FormGroup;
  isSubmitted: boolean = false;
  step: number = 1;

  constructor(private formBuilder: FormBuilder, private profileService: HospitalService, private route: Router) {
    this.hospitalProfileForm = this.formBuilder.group({
      basicDetailForm: this.formBuilder.group({
        hospitalName: ['', Validators.required],
        hospitalWebsite: [''],
        hospitalEmail: ['', [Validators.required, Validators.email]],
        hospitalPhoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        numberOfBeds: 0,
        hospitalAmenities: []
      }),
      addressDetailForm: this.formBuilder.group({
        city: this.formBuilder.group({
          name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
          district: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
          state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
          country: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
          zip: [
            '',
            [
              Validators.required,
              Validators.pattern('^[0-9]*$'),
              Validators.minLength(6),
              Validators.maxLength(6),
            ],
          ],
        }),
      }),
      doctorDetailForm: this.formBuilder.group({
        doctors: this.formBuilder.group({
          doctorName: ['',Validators.required],
          specialization: ['',Validators.required],
          qualification: ['',Validators.required],
          languagesSpoken: ['',Validators.required],
          yearOfExperience: ['',Validators.required],
          startTime: ['',Validators.required],
          endTime: ['',Validators.required],
          bio: ['']
        })
      }),
    });
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
    

    if(this.basicDetails?.invalid && this.step == 1) {
      return
    }

    if (this.addressDetails?.invalid && this.step === 2) {
      return;
    }

    if (this.doctorDetails?.invalid && this.step === 3) {
      return;
    } 

    this.step = this.step + 1;


    if (this.step === 4 && this.hospitalProfileForm.valid) {
      const hospitalData: Hospital = this.hospitalProfileForm.value;

      this.profileService.addHospitalProfile(hospitalData).subscribe(
        (response) => {
          console.log('Hospital added successfully:', response);
        },
        (error) => {
          console.error('Error adding hospital:', error);
        }
      );
      this.route.navigate(['/index']);
    }
  }

  previous() {
    this.step = this.step - 1;
  }

  removeDoctor() {
    console.log("remove");
    
  }
  
  addDoctor() {
    console.log("add");
  }
}
