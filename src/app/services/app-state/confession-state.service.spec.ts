import { TestBed } from '@angular/core/testing';

import { ConfessionStateService } from './confession-state.service';

describe('ConfessionStateService', () => {
  let service: ConfessionStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfessionStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
