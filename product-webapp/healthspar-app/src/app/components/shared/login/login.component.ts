import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  loginForm: FormGroup; // Define a FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    // Initialize the login form with form controls and validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Email is required and should be a valid email format
      password: ['', Validators.required] // Password is required
    });
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        (response) => {
          this.successMessage = 'Login successful';
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          this.successMessage = '';
        }
      );
    } else {
      // Form is invalid, you can handle this case as needed
    }
  }
}