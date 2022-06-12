import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';

  user = {
    validate: false
  };

  constructor() {
    setInterval(() => {
      this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }, 500)

  }

  logOutUser() {
    localStorage.removeItem('user')
  }
}
