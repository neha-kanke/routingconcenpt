import { TestBed } from '@angular/core/testing';

import { FairesService } from './faires.service';

describe('FairesService', () => {
  let service: FairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
