import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient';
import { PatientProfileService } from 'src/app/service/patient-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
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
    patientId: '',
    medicalHistory: '',
    medicineHistory: '',
    treatmentHistory: '',
  };
  patientProfileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private patientService: PatientProfileService, private formBuilder: FormBuilder) {
    this.patientProfileForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      bloodGroup: [''],
      gender: [''],
      cityName: [''],
      district: [''],
      state: [''],
      country: [''],
      zip: [''],
      medicalHistory: [''],
      medicineHistory: [''],
      treatmentHistory: [''],
    });
  }

  ngOnInit(): void {
    this.getPatient('65112310a54f852dd3e07a79');
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
}
