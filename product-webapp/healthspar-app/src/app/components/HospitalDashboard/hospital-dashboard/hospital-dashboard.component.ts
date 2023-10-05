import { DatePipe } from '@angular/common';
import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Hospital } from 'src/app/model/hospital';
import { AppointmentService } from 'src/app/service/appointment.service';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.css'],
})
export class HospitalDashboardComponent implements OnInit{
  appointments: Appointment[] = [];
  todayAppointments: Appointment[] = [];
  

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
  }

  @ViewChild('tableBody') tableBody?: ElementRef<any>;
  selectedValue = 'All';

  constructor(
    private renderer: Renderer2,
    private appointmentService: AppointmentService,
    private datePipe: DatePipe,
    private route: Router,
    private router:ActivatedRoute,
    private hospitalService: HospitalService) { }

  ngAfterViewInit() {
    if (this.tableBody) {
      const tableRows = this.tableBody.nativeElement.querySelectorAll('tr');

      tableRows.forEach((row: HTMLTableRowElement) => {
        const statusCell = row.querySelector('[data-label="Status"] span');
        if (!statusCell) {
          return; // Skip rows without status cell
        }

        const status = statusCell?.textContent?.trim() || ''; // Use optional chaining and provide a default value
        if (this.selectedValue === 'All' || status === this.selectedValue) {
          this.renderer.removeStyle(row, 'display');
        } else {
          this.renderer.setStyle(row, 'display', 'none');
        }
      });
    }
  }

  filterTable(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    this.ngAfterViewInit(); // Reapply the filter when the select changes
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params)=>{
        const hospitalId= +params['id'];
        this.getAppointmentForHospital(hospitalId);
        this.getHospitalDetails(hospitalId);
      }
    )
    this.filterTodayAppointments(); 
  }

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

  getUniquePatientCount(): number {
    const uniquePatientNames = new Set<string>();
    this.appointments.forEach((appointment) => {
      uniquePatientNames.add(appointment.patientName);
    });
    return uniquePatientNames.size;
  }

  filterAppointmentsByStatus(status: string): number {
    return this.appointments.filter((appointment) => appointment.status === status).length;
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

 

  public getHospitalDetails(hospitalId: number) {
    this.hospitalService.getHospitalProfile(hospitalId).subscribe(
      (response: Hospital) => {
        this.hospital = response;
        console.log(this.hospital);

      }
    )
  }

  onViewClick(hospitalId: number):void{
    this.route.navigate(['/hospital-appointment',hospitalId]);
  }

  
}
