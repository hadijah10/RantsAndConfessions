import { TestBed } from '@angular/core/testing';

import { PlaylistStateService } from './playlist-state.service';

describe('PlaylistStateService', () => {
  let service: PlaylistStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
