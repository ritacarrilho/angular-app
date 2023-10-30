import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
    this.location.back();
  }

  addFault(): void {
    // this.router.navigate(['/faults']);
    console.log('Add new Fault');
  }
}
