import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login = new FormGroup({
    validate: new FormControl(false),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {
    this.login.reset(JSON.parse(localStorage.getItem('user') || '{}'));

  }

  loginUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');


    if (user.email === this.login.value.email && user.password === this.login.value.password) {
      this.login.reset({
        validate: true,
        ...user
      })
      localStorage.setItem('user', JSON.stringify(this.login.value))
      this.router.navigate(['/'])
    }



  }

  ngOnInit(): void {
  }

}
