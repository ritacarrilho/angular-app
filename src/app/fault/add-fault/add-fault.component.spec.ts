import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaultComponent } from './add-fault.component';

describe('AddFaultComponent', () => {
  let component: AddFaultComponent;
  let fixture: ComponentFixture<AddFaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFaultComponent]
    });
    fixture = TestBed.createComponent(AddFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
