import { Component, OnInit } from '@angular/core';
import { Fault } from '../../models/fault';
import { Router } from '@angular/router';
import { FaultService } from 'src/app/_services/fault.service';

@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css'],
})
export class FaultsComponent implements OnInit {
  faults: Fault[] = [];

  // dependency injection
  constructor(private router: Router, private faultService: FaultService) {}

  handleRemove(event: Fault) {
    console.log(`Delete fault ${event.id}`);
    this.faultService.deleteFault(event.id).subscribe();
    this.faults = this.faults.filter((fault: Fault) => {
      return fault.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.getFaults();
  }

  getFaults(): void {
    this.faultService.getFaults().subscribe((data: Fault[]) => {
      this.faults = data;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.faultService.addFault({ name } as Fault).subscribe((fault) => {
      this.faults.push(fault);
    });
  }
}
