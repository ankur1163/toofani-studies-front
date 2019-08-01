import { TestBed } from '@angular/core/testing';

import { NgrxService } from './ngrx.service';

describe('NgrxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxService = TestBed.get(NgrxService);
    expect(service).toBeTruthy();
  });
});
