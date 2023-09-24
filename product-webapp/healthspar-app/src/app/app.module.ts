import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { ProfileSidenavComponent } from './components/patient/profile-sidenav/profile-sidenav.component';
import { ProfileMainComponent } from './components/patient/profile-main/profile-main.component';

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
    RecommendationComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PatientProfileComponent,
    ProfileSidenavComponent,
    ProfileMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
