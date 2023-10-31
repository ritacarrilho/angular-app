import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultDetailsComponent } from './fault-details.component';

describe('FaultDetailsComponent', () => {
  let component: FaultDetailsComponent;
  let fixture: ComponentFixture<FaultDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaultDetailsComponent]
    });
    fixture = TestBed.createComponent(FaultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
