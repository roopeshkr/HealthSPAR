import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { UpdateProfileComponent } from './components/patient/update-profile/update-profile.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'patient-profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'hospital-details', component: HospitalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
