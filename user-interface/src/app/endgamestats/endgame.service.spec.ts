import { TestBed } from '@angular/core/testing';

import { EndgameService } from './endgame.service';

describe('EndgameService', () => {
  let service: EndgameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndgameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
