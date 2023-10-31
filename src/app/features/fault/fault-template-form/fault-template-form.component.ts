import { Component, OnInit } from '@angular/core';
import { FaultService } from '../services/fault.service';
import { Fault } from '../models/fault';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fault-template-form',
  templateUrl: './fault-template-form.component.html',
  styleUrls: ['./fault-template-form.component.css'],
})
export class FaultTemplateFormComponent implements OnInit {
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
  }

  handleFault(object: any) {
    if (this.fault) {
      this.faultService.updateFault(object);
      this.goBack();
    }
    // this.router.navigate(['/faults'], { relativeTo: this.route });
  }

  goBack(): void {
    this.location.back();
  }
}
