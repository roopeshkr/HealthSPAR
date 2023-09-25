import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient';
import { PatientProfileService } from 'src/app/service/patient-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  patientProfileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private profileService: PatientProfileService, private formBuilder: FormBuilder) {
    this.patientProfileForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dob: [new Date(), Validators.required],
      bloodGroup: [''],
      gender: [''],
      cityName: [''],
      district: [''],
      state: [''],
      country: [''],
      zip: ['']
    });
  }

  onSubmit() {
    this.isSubmitted = true;


    if (this.patientProfileForm.valid) {
      const patientData: Patient = this.patientProfileForm.value;

      this.profileService.addPatientProfile(patientData).subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
        }
      );

    }
  }
}
