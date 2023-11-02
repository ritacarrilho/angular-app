import { Component, OnInit, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FaultService } from 'src/app/features/fault/services/fault.service';
import { Fault } from 'src/app/features/fault/models/fault';

@Component({
  selector: 'app-fault-details',
  templateUrl: './fault-details.component.html',
  styleUrls: ['./fault-details.component.css'],
})
export class FaultDetailsComponent implements OnInit {
  fault: Fault | undefined;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private faultService: FaultService
  ) {}

  ngOnInit(): void {
    this.getFault();
  }

  getFault(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.faultService.getFault(id).subscribe((fault) => (this.fault = fault));
  }
}
