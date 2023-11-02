import { Component, OnInit } from '@angular/core';
import { FaultService } from '../services/fault.service';
import { Fault } from '../models/fault';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-fault',
  templateUrl: './edit-fault.component.html',
  styleUrls: ['./edit-fault.component.css'],
})
export class EditFaultComponent implements OnInit {
  fault!: Fault;

  constructor(
    private faultService: FaultService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.fault = {} as Fault;
    // resolver
    this.route.params.subscribe((data: Params) => {
      this.faultService
        .getFault(this.route.snapshot.params['id'])
        .subscribe((data: Fault) => {
          this.fault = data;
        });
    });
    console.log(this.fault);
  }

  saveChanges() {
    console.log(`Submit form ${this.fault}`);
  }

  // saveChanges(object: any) {
  //   if (this.fault) {
  //     this.faultService.updateFault(object);
  //     this.goBack();
  //   }
  //   // this.router.navigate(['/faults'], { relativeTo: this.route });
  // }

  goBack(): void {
    this.location.back();
  }
}
