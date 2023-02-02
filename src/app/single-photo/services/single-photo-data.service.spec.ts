import { TestBed } from '@angular/core/testing';

import { SinglePhotoDataService } from './single-photo-data.service';

describe('SinglePhotoDataService', () => {
  let service: SinglePhotoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePhotoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
