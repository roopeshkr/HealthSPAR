import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { PatientProfileService } from 'src/app/service/patient-profile.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit{
  selectedAvatarFile: File | null = null;
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

  constructor(private patientService:PatientProfileService){}

  ngOnInit(): void {
    this.getPatientById('65112310a54f852dd3e07a79');
  }

  public getPatientById(patientId:string):void{
    this.patientService.getPatientProfile(patientId).subscribe(
      (response:Patient)=>{
        this.patient=response
        console.log(this.patient);
      }
    )
  }

  onAvatarFileChanged(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedAvatarFile = files[0];
    }
  }
}
