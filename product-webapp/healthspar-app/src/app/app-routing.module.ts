import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { HospitalPageComponent } from './components/hospital/hospital-page/hospital-page.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { UpdateProfileComponent } from './components/patient/update-profile/update-profile.component';
import { HospitalSidenavComponent } from './components/hospital/shared/hospital-sidenav/hospital-sidenav.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';

import { UpdateHospitalDetailsComponent } from './components/hospital/update-hospital-details/update-hospital-details.component';
import { DisplayProfileComponent } from './components/patient/display-profile/display-profile.component';
import { DisplayHospitalDetailsComponent } from './components/hospital/display-hospital-details/display-hospital-details.component';
import { AppointmentComponent } from './components/patient/appointment/appointment.component';
import { RescheduleAppointmentComponent } from './components/patient/reschedule-appointment/reschedule-appointment.component';
import { AppointmentsListComponent } from './components/hospital/appointments-list/appointments-list.component';
import { RescheduleHospitalAppointmentComponent } from './components/hospital/reschedule-hospital-appointment/reschedule-hospital-appointment.component';
import { HospitalDashboardComponent } from './components/HospitalDashboard/hospital-dashboard/hospital-dashboard.component';
import { DoctorsListComponent } from './components/hospital/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './components/HospitalDashboard/add-doctor/add-doctor.component';
import { DoctorComponent } from './components/hospital/doctor/doctor.component';
import { EditDoctorComponent } from './components/HospitalDashboard/edit-doctor/edit-doctor.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HospitalRegisterComponent } from './components/shared/hospital-register/hospital-register.component';
import { HospitalDashboardHomeComponent } from './components/HospitalDashboard/hospital-dashboard-home/hospital-dashboard-home.component';
import { RecommendationComponent } from './components/patient/recommendation/recommendation.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  {
    path: 'hospital-page/:id',
    component: HospitalPageComponent,
  },
  { path: 'hospital', component: HospitalComponent },
  { path: 'patient-profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'display-patient-profile', component: DisplayProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hospital-login', component: HospitalRegisterComponent },
  { path: 'signup', component: SignupComponent },
  

  { path: 'profile', component: ProfileComponent },
  { path: 'display-profile', component: DisplayProfileComponent },

  
  {
    path: 'reschedule-patient-appointment/:id',
    component: RescheduleAppointmentComponent,
  },
  { path: 'patient-appointment', component: AppointmentComponent },
  
  
  
  { path: 'home-page', component: HomePageComponent },
  {
    path:'patient-home',component:HomeComponent,
    children:[
      {path:'',redirectTo:'/index',pathMatch:'full'},
      { path: 'index', component: RecommendationComponent },
    ]
  },
  
  {
    path: 'hospital-home', component: HospitalDashboardHomeComponent,
    children: [
      { path: '', redirectTo: '/hospital-dashboard:id', pathMatch: 'full' },
      { path: 'hospital-dashboard/:id', component: HospitalDashboardComponent },
      {
        path: 'doctors-list', component: DoctorsListComponent
      },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'hospital-appointment', component: AppointmentsListComponent },
      {
        path: 'display-hospital-details', component: DisplayHospitalDetailsComponent,
      },
      {
        path: 'update-hospital-details/:id',
        component: UpdateHospitalDetailsComponent,
      },
      { path: 'doctor/:hospitalId/:id', component: DoctorComponent },
      { path: 'edit-doctor/:hospitalId/:index', component: EditDoctorComponent },
      { path: 'hospital-details', component: HospitalDetailsComponent },
      { path: 'hospital-appointment', component: AppointmentsListComponent },
      {
        path: 'reschedule-hospital-appointment/:id',
        component: RescheduleHospitalAppointmentComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
