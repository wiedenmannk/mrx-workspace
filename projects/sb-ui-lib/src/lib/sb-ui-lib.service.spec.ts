import { TestBed } from '@angular/core/testing';

import { SbUiLibService } from './sb-ui-lib.service';

describe('SbUiLibService', () => {
  let service: SbUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
