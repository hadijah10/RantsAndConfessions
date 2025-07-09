import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthStateService } from '../../../services/app-state/auth-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authState: AuthStateService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) this.loginForm.markAllAsTouched();
    const { email, password } = this.loginForm.value
    const subscription = this.authState.login(email, password).subscribe(success => {
      if (success) {
        this.router.navigate(['/admin'])
      }
      subscription.unsubscribe();
    });
  }

}
