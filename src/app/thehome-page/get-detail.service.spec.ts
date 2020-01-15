import { TestBed } from '@angular/core/testing';

import { GetDetailService } from './get-detail.service';

describe('GetDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDetailService = TestBed.get(GetDetailService);
    expect(service).toBeTruthy();
  });
});
