import { Component, OnInit } from '@angular/core';
import { FaultService } from '../services/fault.service';
import { Fault } from '../models/fault';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-fault',
  templateUrl: './add-fault.component.html',
  styleUrls: ['./add-fault.component.css'],
})
export class AddFaultComponent implements OnInit {
  fault!: Fault;

  constructor(
    private faultService: FaultService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.fault = {} as Fault;
  }

  addFault(fault: Fault) {
    if (this.fault) {
      this.faultService.addFault(fault).subscribe(() => this.goBack());
      console.log(this.fault);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
