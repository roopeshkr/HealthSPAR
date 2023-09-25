import { Component } from '@angular/core';

@Component({
  selector: 'app-update-hospital-details',
  templateUrl: './update-hospital-details.component.html',
  styleUrls: ['./update-hospital-details.component.css']
})
export class UpdateHospitalDetailsComponent {
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
