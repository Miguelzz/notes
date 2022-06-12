import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { memory } from 'src/app/config/memory';
import { User } from 'src/app/models/user';
import { md5 } from 'src/assets/functions/strings';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,) { }


  login(user: User) {
    localStorage.setItem('id', md5(user.email?.trim() || ''))
    memory.user = JSON.parse(localStorage.getItem(memory.id) || '{}');

    if (memory.user.email === user.email && memory.user.password === user.password) {
      console.log(memory)
      memory.user.validate = true;
      localStorage.setItem(memory.id, JSON.stringify(memory.user))
      this.router.navigate(['/'])
    } else {
      Swal.fire({
        title: 'Usuario incorrecto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#673ab7',
        confirmButtonText: 'Registrate!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/register'])
        }
      })
    }

  }

  register(user: User) {
    const id = md5(user.email?.trim() || '')
    localStorage.setItem('id', id)
    localStorage.setItem(id, JSON.stringify(user))
    this.router.navigate(['/login'])
  }

}
