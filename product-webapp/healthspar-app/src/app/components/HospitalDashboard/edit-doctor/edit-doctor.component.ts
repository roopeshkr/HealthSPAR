import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css'],
})
export class EditDoctorComponent implements OnInit {
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
  hospitalId: number | null = null;;
  index: number | null = null;;

  constructor(
    private profileService: HospitalService,
    private formBuilder: FormBuilder,
    private route: Router,
    private router: ActivatedRoute
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
    this.router.params.subscribe(
      (params) => {
        this.hospitalId = +params['hospitalId'];
        this.index = +params['index'];

        this.getHospital(this.hospitalId);

        if (this.hospitalId !== null && this.index !== null) {
          this.populateFormWithDoctor(this.index);
        }
      }
    );
  }




  onSubmit() {
    this.isSubmitted = true;

    const updatedDoctor = this.doctorDetailForm.value;
    if (this.hospitalId !== null && this.index !== null) {
      if (this.hospital.doctors.length > this.index) {
        this.hospital.doctors[this.index] = updatedDoctor;
      }

      this.updateHospital(this.hospitalId, this.hospital);
      this.route.navigate(['/doctors-list'])
    }
  }

  public getHospital(hospitalId: number): void {
    this.profileService.getHospitalProfile(hospitalId).subscribe(
      (response) => {
        this.hospital = response;
        console.log(this.hospital);

      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );
  }

  public populateFormWithDoctor(index: number) {
    if (this.hospital.doctors.length > index && index >= 0 && index < this.hospital.doctors.length) {
      const doctorData = this.hospital.doctors[index]

      this.doctorDetailForm.patchValue({
        doctorName: doctorData.doctorName,
        department: doctorData.department,
        qualification: doctorData.qualification,
        languagesSpoken: doctorData.languagesSpoken,
        yearOfExperience: doctorData.yearOfExperience,
        startTime: doctorData.startTime,
        endTime: doctorData.endTime,
        bio: doctorData.bio
      })
    }
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
