import { Component, OnInit } from '@angular/core';
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
