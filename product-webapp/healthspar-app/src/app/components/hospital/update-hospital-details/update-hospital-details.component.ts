import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-update-hospital-details',
  templateUrl: './update-hospital-details.component.html',
  styleUrls: ['./update-hospital-details.component.css']
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
    hospitalId: 0
  };



  hospitalProfileForm: FormGroup;
  isSubmitted: boolean = false;
  step: number = 1;

  constructor(private profileService: HospitalService, private formBuilder: FormBuilder,private route:Router) {
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
          doctorName: ['', Validators.required],
          specialization: ['', Validators.required],
          qualification: ['', Validators.required],
          languagesSpoken: ['', Validators.required],
          yearOfExperience: ['', Validators.required],
          startTime: ['', Validators.required],
          endTime: ['', Validators.required],
          bio: ['']
        })
      }),
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

    if (this.hospitalProfileForm.valid) {
      const updatedHospitalData: Hospital = {
        hospitalId: this.hospital.hospitalId,
        hospitalName: this.hospitalProfileForm.value.basicDetailForm.hospitalName,
        hospitalWebsite: this.hospitalProfileForm.value.basicDetailForm.hospitalWebsite,
        hospitalEmail: this.hospitalProfileForm.value.basicDetailForm.hospitalEmail,
        hospitalPhoneNumber: this.hospitalProfileForm.value.basicDetailForm.hospitalPhoneNumber,
        numberOfBeds: this.hospitalProfileForm.value.basicDetailForm.numberOfBeds,
        hospitalAmenities: this.hospitalProfileForm.value.basicDetailForm.hospitalAmenities,
        city: {
          name: this.hospitalProfileForm.value.addressDetailForm.city.name,
          district: this.hospitalProfileForm.value.addressDetailForm.city.district,
          state: this.hospitalProfileForm.value.addressDetailForm.city.state,
          country: this.hospitalProfileForm.value.addressDetailForm.city.country,
          zip: this.hospitalProfileForm.value.addressDetailForm.city.zip,

        },
        doctors: [
          {
            doctorName: this.hospitalProfileForm.value.doctorDetailForm.doctors.doctorName,
            specialization: this.hospitalProfileForm.value.doctorDetailForm.doctors.specialization,
            qualification: this.hospitalProfileForm.value.doctorDetailForm.doctors.qualification,
            languagesSpoken: this.hospitalProfileForm.value.doctorDetailForm.doctors.languagesSpoken,
            yearOfExperience: this.hospitalProfileForm.value.doctorDetailForm.doctors.yearOfExperience,
            startTime: this.hospitalProfileForm.value.doctorDetailForm.doctors.startTime,
            endTime: this.hospitalProfileForm.value.doctorDetailForm.doctors.endTime,
            bio: this.hospitalProfileForm.value.doctorDetailForm.doctors.bio,
          }
        ],
        hospitalImageURL: '',
        hospitalRating: 0,
        hospitalReviews: [],
        specialty: []
      };
      
      
      this.hospital = updatedHospitalData
      this.updateHospital();
      this.route.navigate(['/display-patient-profile']);
    }
  }

  public getHospital(hospitalId: number): void {
    this.profileService.getHospitalProfile(hospitalId).subscribe(
      (response) => {
        this.hospital = response;
        this.hospitalProfileForm.patchValue(this.hospital)
      }, (error) => {
        console.error('Error fetching patient:', error);
      }
    )
  }

  public updateHospital(): void {
    this.profileService.updateHospitalProfile(this.hospital.hospitalId, this.hospital).subscribe(
      (response: Hospital) => {
        console.log("Hospital profile updated successfully: ", response);

      }, (error) => {
        console.error("Error updating hospital profile:", error);

      }
    )
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
