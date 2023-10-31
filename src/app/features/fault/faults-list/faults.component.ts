import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { FaultService } from 'src/app/features/fault/services/fault.service';
import { Fault } from '../models/fault';

@Component({
  selector: 'app-faults',
  templateUrl: './faults.component.html',
  styleUrls: ['./faults.component.css'],
})
export class FaultsComponent implements OnInit {
  faultsList: Fault[] = [];
  searchValue = '';
  faultService: FaultService = inject(FaultService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getFaults();
  }

  handleRemove(event: Fault) {
    console.log(`Delete fault ${event.id}`);
    this.faultService
      .deleteFault(event.id)
      .pipe()
      .subscribe(() => {
        this.faultsList = this.faultsList.filter((fault: Fault) => {
          return fault.id !== event.id;
        });
      });
  }

  getFaults(): void {
    this.faultService.getFaults().subscribe((data: Fault[]) => {
      this.faultsList = data;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.faultService.addFault({ name } as Fault).subscribe((fault) => {
      this.faultsList.push(fault);
    });
  }
}
