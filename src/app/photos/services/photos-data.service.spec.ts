import { TestBed } from '@angular/core/testing';

import { PhotosDataService } from './photos-data.service';

describe('PhotosDataService', () => {
  let service: PhotosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
