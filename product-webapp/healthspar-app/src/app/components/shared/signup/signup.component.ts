import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  selectedRole = 'PATIENT';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  signup(): void {
    this.authService.signup(this.name, this.email, this.password, this.selectedRole).subscribe(
      (response) => {
        this.successMessage = 'Signup successful';
        this.errorMessage = '';
        
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = 'Signup failed. Please try again later.';
        this.successMessage = '';
      }
    );
  }
}
