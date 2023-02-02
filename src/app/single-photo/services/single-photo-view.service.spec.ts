import { TestBed } from '@angular/core/testing';

import { SinglePhotoViewService } from './single-photo-view.service';

describe('SinglePhotoViewService', () => {
  let service: SinglePhotoViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePhotoViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
