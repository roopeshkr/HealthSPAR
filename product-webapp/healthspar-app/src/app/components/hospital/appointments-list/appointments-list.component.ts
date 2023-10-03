import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private datePipe: DatePipe, private route: Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params)=>{
        const hospitalId= +params['id'];
        this.getAppointmentForHospital(hospitalId)
      }
    );
    const trigger = $('.hamburger');
    const overlay = $('.overlay');
    let isClosed = false;

    trigger.click(() => {
      hamburger_cross();
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    $('[data-toggle="offcanvas"]').click(() => {
      $('#wrapper').toggleClass('toggled');
    });
  }

  

  public getAppointmentForHospital(hospitalId:number){
    this.appointmentService.getAppointmentsForHospital(hospitalId).subscribe(
      (response:Appointment[])=>{
        this.appointments=response;
        this.appointments.sort(
          (a, b) => {
            const dateA = new Date(a.dateTime);
            const dateB = new Date(b.dateTime);
            return dateA.getTime() - dateB.getTime();
          }
        )
      }
    )
  }

  onBookClick(appointmentId: number): void {
    this.route.navigate(['/reschedule-hospital-appointment', appointmentId]);
  }


}
