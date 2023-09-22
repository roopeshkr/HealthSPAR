import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalPageComponent } from './components/hospital/hospital-page/hospital-page.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  {
    path: 'hospital-page',
    component: HospitalPageComponent,
  },
  { path: 'hospital-details', component: HospitalDetailsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
