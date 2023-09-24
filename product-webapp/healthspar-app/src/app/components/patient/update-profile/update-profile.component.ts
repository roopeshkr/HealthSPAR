<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient';
import { PatientProfileService } from 'src/app/service/patient-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
<<<<<<< HEAD
export class UpdateProfileComponent implements OnInit {
  patient: Patient = {
    patientName: '',
    email: '',
    phoneNumber: '',
    dob: new Date(),
    bloodGroup: '',
    gender: '',
    cityName: '',
    district: '',
    state: '',
    country: '',
    zip: '',
    patientId: ''
  };
  patientProfileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private patientService: PatientProfileService, private formBuilder: FormBuilder) {
=======
export class UpdateProfileComponent {
  patientProfileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private profileService: PatientProfileService, private formBuilder: FormBuilder) {
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
    this.patientProfileForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
<<<<<<< HEAD
      dob: ['', Validators.required],
=======
      dob: [new Date(), Validators.required],
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
      bloodGroup: [''],
      gender: [''],
      cityName: [''],
      district: [''],
      state: [''],
      country: [''],
      zip: ['']
    });
  }

<<<<<<< HEAD
  ngOnInit(): void {
    this.getPatient('6510036faa8ba165bc419091');
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.patientProfileForm.valid) {
      this.patient = { ...this.patient, ...this.patientProfileForm.value };
      this.updatePatientProfile();
    }
  }

  public getPatient(patientId: string): void {
    this.patientService.getPatientProfile(patientId).subscribe(
      (response) => {
        this.patient = response;
        this.patientProfileForm.patchValue(this.patient);
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );
  }

  public updatePatientProfile(): void {
    this.patientService.updatePatientProfile(this.patient.patientId, this.patient).subscribe(
      (response: Patient) => {
        console.log('Patient profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating patient profile:', error);
      }
    );
  }
=======
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.patientProfileForm.value);


    if (this.patientProfileForm.valid) {
      const patientData: Patient = this.patientProfileForm.value;

      this.profileService.addPatientProfile(patientData).subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
        },
        (error) => {
          console.error('Error adding patient:', error);
        }
      );

    }
  }
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
}
