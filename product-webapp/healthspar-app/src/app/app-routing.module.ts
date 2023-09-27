import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { HospitalPageComponent } from './components/hospital/hospital-page/hospital-page.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { UpdateProfileComponent } from './components/patient/update-profile/update-profile.component';
// import { SidenavComponent } from './components/patient/sidenav/sidenav.component';
import { HospitalSidenavComponent } from './components/hospital/shared/hospital-sidenav/hospital-sidenav.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';

import { UpdateHospitalDetailsComponent } from './components/hospital/update-hospital-details/update-hospital-details.component';
import { DisplayProfileComponent } from './components/patient/display-profile/display-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  {
    path: 'hospital-page',
    component: HospitalPageComponent,
  },
  { path: 'hospital', component: HospitalComponent },
  { path: 'patient-profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'display-patient-profile', component: DisplayProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hospital-details', component: HospitalDetailsComponent },
  {
    path: 'update-hospital-details',
    component: UpdateHospitalDetailsComponent,
  },
  {
    path: 'hospital-page',
    component: HospitalPageComponent,
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'hospital-sidenav', component: HospitalSidenavComponent },
  { path: 'display-profile', component: DisplayProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
