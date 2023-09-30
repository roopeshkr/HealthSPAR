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
    hospitalAmenities: '',
    numberOfBeds: 0,
    doctors: [],
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
        hospitalAmenities: ['']
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
      doctorDetailForm: this.formBuilder.array([]),
    });
  }
  ngOnInit(): void {
    this.getHospital(0);
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

  getDoctorFormGroup(index: number) {
    return this.doctorDetails.at(index) as FormGroup;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.basicDetails?.invalid && this.step == 1) {
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
      const hospitalData: Hospital = {
        hospitalName: this.basicDetails?.get('hospitalName')?.value,
        hospitalWebsite: this.basicDetails?.get('hospitalWebsite')?.value,
        hospitalEmail: this.basicDetails?.get('hospitalEmail')?.value,
        hospitalPhoneNumber: this.basicDetails?.get('hospitalPhoneNumber')?.value,
        hospitalAmenities: this.basicDetails?.get('hospitalAmenities')?.value,
        numberOfBeds: this.basicDetails?.get('numberOfBeds')?.value,
        city: {
          name: this.addressDetails?.get('city.name')?.value,
          district: this.addressDetails?.get('city.district')?.value,
          state: this.addressDetails?.get('city.state')?.value,
          country: this.addressDetails?.get('city.country')?.value,
          zip: this.addressDetails?.get('city.zip')?.value
        },
        doctors: this.doctorDetails.value,
        hospitalId: 0,
        hospitalImageURL: '',
        hospitalRating: 0,
        hospitalReviews: [],
      }
      
      this.updateHospital(hospitalData.hospitalId,hospitalData);
      
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

  public updateHospital(hospitalId:number,hospital:Hospital): void {
    this.profileService
      .updateHospitalProfile(this.hospital.hospitalId, this.hospital)
      .subscribe(
        (response: Hospital) => {
          console.log('Hospital profile updated successfully: ', response);
          this.route.navigate(['/display-patient-profile']);
        },
        (error) => {
          console.error('Error updating hospital profile:', error);
        }
      );
  }

  removeDoctor(index: number) {
    this.doctorDetails.removeAt(index)

  }

  addDoctor() {
    const newDoctor = this.formBuilder.group(
      {
        doctorName: ['', Validators.required],
        department: ['', Validators.required],
        qualification: ['', Validators.required],
        languagesSpoken: ['', Validators.required],
        yearOfExperience: ['', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        bio: [''],
      }
    );

    this.doctorDetails.push(newDoctor);

  }

  previous() {
    this.step = this.step - 1;
  }
}
