import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button
    [routerLink]="routeRedirect"
    [type]="type"
    (click)="onClick()"
    [disabled]="isDisabled"
    class="btn"
  >
    {{ buttonText }}
  </button>`,
  styles: [
    '.btn { color: var(--slb-dark-grey-4); background-color: #6ba7ff; border: 1px solid #6ba7ff; border-radius: 4px; padding: 9px; font-weight: 700; width: 142px; cursor: pointer; }',
  ],
})
export class ButtonComponent {
  public buttonText = '';

  @Input()
  set text(name: string) {
    this.buttonText = name;
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;
  @Input() routeRedirect: any;

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
