import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router, private location: Location) {}

  title = 'Subsurface Framework Building';

  goBack(): void {
    this.router.navigate(['/faults']);
  }

  addFault(): void {
    this.router.navigate(['/add']);
    console.log('Add new Fault');
  }
}
