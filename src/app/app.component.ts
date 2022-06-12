import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { memory } from './config/memory';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';

  user: User = {
    validate: false
  };

  constructor(private router: Router) {
    setInterval(() => {
      memory.id = localStorage.getItem('id') || '';

      if (memory.id) {
        memory.user = JSON.parse(localStorage.getItem(memory.id) || '{}');
        this.user = memory.user as any
        console.log(this.user.validate)
      }

    }, 500)

  }

  logOutUser() {
    localStorage.setItem(memory.id!, JSON.stringify({
      ...this.user,
      validate: false,
    }))
    this.router.navigate(['/login'])
  }
}
