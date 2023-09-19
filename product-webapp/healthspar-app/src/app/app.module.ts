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
import { HeroComponent } from './components/patient/hero/hero.component';
import { RecommendationComponent } from './components/patient/recommendation/recommendation.component';
import { NavbarComponent } from './components/patient/shared/navbar/navbar.component';

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
    HeroComponent,
    RecommendationComponent,
    NavbarComponent
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
