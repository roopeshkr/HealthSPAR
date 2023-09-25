import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hospital } from 'src/app/model/hospital';
import { HospitalService } from 'src/app/service/hospital.service';
@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css'],
})
export class HospitalDetailsComponent {
  doctors: Array<{
    name: string;
    specialty: string;
    experience: string;
    language: string;
  }> = [];

  hospitalProfileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private profileService: HospitalService, private formBuilder: FormBuilder) {
    this.hospitalProfileForm = this.formBuilder.group(
      {
        hospitalName: ['',Validators.required],
        hospitalWebsite: [''],
        hospitalEmail: ['',Validators.email],
        hospitalPhoneNumber: ['',Validators.pattern('^[0-9]*$'),Validators.maxLength(10),Validators.minLength(10)],
        hospitalImageURL: '',
        hospitalRating: [0,Validators.max(5),Validators.min(0)],
        hospitalReviews: [''],
        city: {
          cityId: 0,
          name: ['',Validators.required],
          district: ['',Validators.required],
          state: ['',Validators.required],
          country: ['',Validators.required],
          zip: ['',Validators.pattern('^[0-9]*$'),Validators.minLength(6),Validators.maxLength(6)],
        },
        hospitalAmenities: [],
        numberOfBeds: [0,Validators.min(1)],
        doctors: [],
        specialty: [],
      }
    )
  }

  onSubmit(){
    this.isSubmitted=true;
    if(this.hospitalProfileForm.valid){
      const HospitalData:Hospital=this.hospitalProfileForm.value;
      this.profileService.addHospitalProfile(HospitalData).subscribe(
        (response)=>{
          console.log("Hospital Added successfully:",response);
          
        }
      )
    }
  }

  removeDoctor(index: number) {
    this.doctors.splice(index, 1);
  }

  addDoctor() {
    this.doctors.push({
      name: '',
      specialty: '',
      experience: '',
      language: '',
    });
  }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
