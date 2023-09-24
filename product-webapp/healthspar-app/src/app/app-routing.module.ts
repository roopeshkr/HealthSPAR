import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { HospitalPageComponent } from './components/hospital/hospital-page/hospital-page.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  {
    path: 'hospital-page',
    component: HospitalPageComponent,
  },
  { path: 'hospital', component: HospitalComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'hospital-details', component: HospitalDetailsComponent },
  {
    path: 'hospital-page',
    component: HospitalPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
