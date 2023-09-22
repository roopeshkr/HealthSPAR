import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css'],
})
export class HospitalDetailsComponent {
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
