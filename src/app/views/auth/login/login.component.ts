import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { memory } from 'src/app/config/memory';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login = new FormGroup({
    validate: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private authService: AuthService) {
    this.login.reset(JSON.parse(localStorage.getItem(memory.id) || '{}'));

  }

  loginUser() {
    this.authService.login(this.login.value as User)
  }

  ngOnInit(): void {
  }

}
