import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaultService } from 'src/app/_services/fault.service';
import { Fault } from 'src/app/models/fault';

@Component({
  selector: 'app-edit-fault',
  templateUrl: './edit-fault.component.html',
  styleUrls: ['./edit-fault.component.css'],
})
export class EditFaultComponent implements OnInit {
  fault!: Fault;
  faultId: number = -1;
  constructor(
    private faultService: FaultService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fault = {} as Fault;
    this.faultId = Number(this.route.snapshot.params['id']);
    this.faultService.getFault(this.faultId).subscribe((data: Fault) => {
      this.fault = data;
    });
  }
}
