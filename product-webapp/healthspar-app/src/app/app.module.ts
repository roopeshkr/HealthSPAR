import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HospitalComponent } from './components/patient/hospital/hospital.component';
import { AppointmentComponent } from './components/patient/appointment/appointment.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { DashboardComponent } from './components/hospital/dashboard/dashboard.component';
import { DoctorComponent } from './components/hospital/doctor/doctor.component';
import { NavbarComponent } from './components/patient/shared/navbar/navbar.component';
import { HeroComponent } from './components/patient/hero/hero.component';
import { RecommendationComponent } from './components/patient/recommendation/recommendation.component';
import { HomeComponent } from './components/patient/home/home.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { UpdateProfileComponent } from './components/patient/update-profile/update-profile.component';
import { HospitalSidenavComponent } from './components/hospital/shared/hospital-sidenav/hospital-sidenav.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { UpdateHospitalDetailsComponent } from './components/hospital/update-hospital-details/update-hospital-details.component';
import { DisplayProfileComponent } from './components/patient/display-profile/display-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HospitalComponent,
    AppointmentComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    DoctorComponent,
    NavbarComponent,
    HeroComponent,
    HospitalComponent,
    HomeComponent,
    RecommendationComponent,
    HospitalDetailsComponent,
    ProfileComponent,
    UpdateProfileComponent,
    HospitalSidenavComponent,
    LoginComponent,
    SignupComponent,
    UpdateHospitalDetailsComponent,
    DisplayProfileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
