import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fault } from '../models/fault';

@Component({
  selector: 'app-fault-template-form',
  templateUrl: './fault-template-form.component.html',
  styleUrls: ['./fault-template-form.component.css'],
})
export class FaultTemplateFormComponent {
  @Input() fault!: Fault;
  @Output() handleClick = new EventEmitter();
  @Output() modifiedFault!: Fault;
  @Input() buttonText: string = '';
  @Input() routeRedirect: any;

  constructor() {}

  onClick(fault: Fault) {
    this.handleClick.emit(fault);
  }

  // onClick() {
  //   console.log('Clicked');
  // }
  // ngOnInit() {
  //   this.fault = {} as Fault;
  //   // resolver
  //   this.route.params.subscribe((data: Params) => {
  //     this.faultService
  //       .getFault(this.route.snapshot.params['id'])
  //       .subscribe((data: Fault) => {
  //         this.fault = data;
  //       });
  //   });
  // }

  // handleFault(object: any) {
  //   if (this.fault) {
  //     this.faultService.updateFault(object);
  //     this.goBack();
  //   }
  //   // this.router.navigate(['/faults'], { relativeTo: this.route });
  // }
}
