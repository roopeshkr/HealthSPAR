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

<<<<<<< HEAD

=======
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
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
<<<<<<< HEAD
=======
    console.log(this.patientProfileForm.value);
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76


    if (this.patientProfileForm.valid) {
      const patientData: Patient = this.patientProfileForm.value;

      this.profileService.addPatientProfile(patientData).subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
<<<<<<< HEAD
=======
        },
        (error) => {
          console.error('Error adding patient:', error);
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
        }
      );

    }
  }
}
