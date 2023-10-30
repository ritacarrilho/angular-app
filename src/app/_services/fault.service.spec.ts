/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaultService } from './fault.service';

describe('Service: Fault', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaultService]
    });
  });

  it('should ...', inject([FaultService], (service: FaultService) => {
    expect(service).toBeTruthy();
  }));
});
