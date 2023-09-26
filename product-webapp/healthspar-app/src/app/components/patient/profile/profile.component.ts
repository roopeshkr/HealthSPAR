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
      phoneNumber: ['', Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10),Validators.minLength(10)],
      dob: [new Date(), Validators.required],
      bloodGroup: ['',Validators.required],
      gender: ['',Validators.required],
      cityName: ['',Validators.required],
      district: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      zip: ['',Validators.pattern('^[0-9]*$'),Validators.minLength(6),Validators.maxLength(6)],
      medicalHistory: [''],
      medicineHistory: [''],
      treatmentHistory: [''],
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
