import { Component } from '@angular/core';

@Component({ // component decorator
  selector: 'app-root', // name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-cribs';
}
