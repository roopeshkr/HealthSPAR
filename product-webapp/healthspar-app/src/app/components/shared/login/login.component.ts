import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  selectedRole = 'PATIENT';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService) { }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.successMessage = 'Login successful';
        this.errorMessage = '';

      },
      (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.successMessage = '';
      }
    );
  }
}
