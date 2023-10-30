import { Component, OnInit } from '@angular/core';
import { FaultService } from '../../_services/fault.service';
import { Fault } from '../../models/fault';
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
    this.faultService.addFault(fault).subscribe();
    console.log(this.fault);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
