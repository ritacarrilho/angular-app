import { Component, OnInit, Input, Output } from '@angular/core';
import { Fault } from 'src/app/models/fault';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FaultService } from 'src/app/_services/fault.service';

@Component({
  selector: 'app-fault-card',
  templateUrl: './fault-card.component.html',
  styleUrls: ['./fault-card.component.css'],
})
export class FaultCardComponent implements OnInit {
  @Input()
  detail!: Fault;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private faultService: FaultService) {}

  ngOnInit(): void {}

  onRemove(): void {
    this.remove.emit(this.detail);
  }

  editFault() {
    console.log(`Edit Fault ${this.detail.id}`);
  }
}
