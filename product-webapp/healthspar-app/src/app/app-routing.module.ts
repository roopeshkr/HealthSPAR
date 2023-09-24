import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/patient/home/home.component';
<<<<<<< HEAD
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { UpdateProfileComponent } from './components/patient/update-profile/update-profile.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'patient-profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hospital-details', component: HospitalDetailsComponent },
=======
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';

const routes: Routes = [
  {path:'index',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:PatientProfileComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
