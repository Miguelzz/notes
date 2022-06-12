import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private router: Router, private authService: AuthService) {
  }

  registerUser() {
    this.authService.register(this.register.value as User)
  }

  valid() {
    return (this.register.controls['password'].value ==
      this.register.controls['password2'].value)
  }

  ngOnInit(): void {
  }

}
