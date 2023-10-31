import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultCardComponent } from './fault-card.component';

describe('FaultDetailsComponent', () => {
  let component: FaultCardComponent;
  let fixture: ComponentFixture<FaultCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaultCardComponent],
    });
    fixture = TestBed.createComponent(FaultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
