import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    email: new FormControl('miguel@gmail.com'),
    password: new FormControl('123456'),
    password2: new FormControl('123456'),
  });

  constructor(private router: Router) { }

  registerUser() {
    localStorage.setItem('user', JSON.stringify(this.register.value))
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
