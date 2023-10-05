import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/model/hospital';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { Router } from '@angular/router';
import { HospitalImageService } from 'src/app/service/hospital-image.service';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendedHospitals: Hospital[] = [];
  appointments: Appointment[] = [];
  todayAppointments: Appointment[] = [];

  constructor(private recommendService: RecommendationService, private appointmentService: AppointmentService, private route: Router, private imageService: HospitalImageService) { }

  public getAppointmentForHospital(hospitalId: number) {
    this.appointmentService.getAppointmentsForHospital(hospitalId).subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
        this.appointments.sort(
          (a, b) => {
            const dateA = new Date(a.dateTime);
            const dateB = new Date(b.dateTime);
            return dateA.getTime() - dateB.getTime();
          }
        )
        console.log(this.appointments);

      }
    )
  }

  filterTodayAppointments() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.todayAppointments = this.appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.dateTime);
      return appointmentDate.getTime() >= today.getTime() && appointmentDate.getTime() < today.getTime() + 24 * 60 * 60 * 1000;
    });
    console.log("todays appointment ",this.todayAppointments);
    
  }

  ngOnInit(): void {
    this.getRecommendations('chennai');
  }

  public getRecommendations(cityName: string): void {
    this.recommendService.getRecommendedHospitals(cityName).subscribe(
      (response: Hospital[]) => {
        this.recommendedHospitals = response;
        console.log(this.recommendedHospitals);
      }
    )

  }

  onBookClick(hospitalId: number): void {
    this.route.navigate(['/hospital-page', hospitalId]);
  }







}
