import { Component, OnInit, EventEmitter, Output, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FaultService } from 'src/app/_services/fault.service';
import { Fault } from 'src/app/models/fault';

@Component({
  selector: 'app-fault-details',
  templateUrl: './fault-details.component.html',
  styleUrls: ['./fault-details.component.css'],
})
export class FaultDetailsComponent implements OnInit {
  // route: ActivatedRoute = inject(ActivatedRoute);
  // faultService = inject(FaultService);
  fault: Fault | undefined;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private faultService: FaultService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFault();
  }

  getFault(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.faultService.getFault(id).subscribe((fault) => (this.fault = fault));
  }
}
