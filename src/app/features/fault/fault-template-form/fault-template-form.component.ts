import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fault } from '../models/fault';
import { FormBuilder, Validators } from '@angular/forms';
import { FaultService } from '../services/fault.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fault-template-form',
  templateUrl: './fault-template-form.component.html',
  styleUrls: ['./fault-template-form.component.css'],
})
export class FaultTemplateFormComponent implements OnInit {
  @Input() buttonText: string = 'Save';
  fault!: Fault;
  faultForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    engine: ['', Validators.required],
  });
  isSubmited: boolean = false;
  isAddMode?: boolean = true;

  constructor(
    private fb: FormBuilder,
    private faultService: FaultService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fault = {} as Fault;

    if (this.route.snapshot.routeConfig?.path?.toString().includes('edit')) {
      this.route.params.subscribe((data: Params) => {
        this.faultService
          .getFault(this.route.snapshot.params['id'])
          .subscribe((data: Fault) => {
            this.fault = data;
            console.log(this.fault);
            this.faultForm.get('name')?.setValue(this.fault.name);
            this.faultForm.get('description')?.setValue(this.fault.description);
            this.faultForm.get('engine')?.setValue(this.fault.engine);
          });
      });

      this.isAddMode = false;
    } else {
      this.isAddMode = true;
    }
  }

  onSubmit(): void {
    this.fault = <Fault>this.faultForm.value;

    if (this.route.snapshot.routeConfig?.path?.toString().includes('edit')) {
      console.log(
        'Submitted form',
        this.faultForm.value,
        this.faultForm.invalid,
        this.fault
      );
      this.fault.id = this.route.snapshot.params['id'];
      this.faultService.updateFault(this.fault);
      this.goBack(`/faults/details/${this.fault.id}`);

      this.isSubmited = true;
    }

    if (this.route.snapshot.routeConfig?.path?.toString().includes('add')) {
      console.log(
        'Submitted form',
        this.faultForm.value,
        'form',
        this.faultForm.invalid,
        'fault',
        this.fault
      );
      this.faultService
        .addFault(this.fault)
        .subscribe(() => this.goBack('/faults'));
    }
    this.isSubmited = true;
  }

  validateInputs() {}

  goBack(route: string): void {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
