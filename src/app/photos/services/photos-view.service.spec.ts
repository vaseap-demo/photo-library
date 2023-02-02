import { TestBed } from '@angular/core/testing';

import { PhotosViewService } from './photos-view.service';
import { MockProvider } from 'ng-mocks';
import { PhotosDataService } from './photos-data.service';
import { FavoritesPhotosService } from '@core/services/favorites-photos.service';
import { ImageEntity } from '@shared/models/image-entity';
import { of, skip, take, toArray } from 'rxjs';

describe('PhotosViewService', () => {
  let service: PhotosViewService;
  let spyDataService: PhotosDataService;
  let spyFavoritesService: FavoritesPhotosService;
  const mockImages: ImageEntity[] = [
    { id: 1, path: '/test1' },
    { id: 2, path: '/test2' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(PhotosDataService), MockProvider(FavoritesPhotosService)],
    });
    service = TestBed.inject(PhotosViewService);
    spyDataService = TestBed.inject(PhotosDataService);
    spyFavoritesService = TestBed.inject(FavoritesPhotosService);
    spyOn(spyDataService, 'getRandomImage').and.returnValue(of(mockImages));
    spyOn(spyFavoritesService, 'addImage');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add image to favorites', () => {
    service.addImageToFavourites({ ...mockImages[0] });
    expect(spyFavoritesService.addImage).toHaveBeenCalledOnceWith({ ...mockImages[0] });
  });

  describe('#getImages', () => {
    it('should get data first data if index 0 and limit 9', () => {
      service.getImages();
      expect(spyDataService.getRandomImage).toHaveBeenCalledOnceWith(0, 9);
    });
    it('should get data second data if index 9 and limit 6', () => {
      service.getImages();
      service.getImages();
      expect(spyDataService.getRandomImage).toHaveBeenCalledWith(0, 9);
      expect(spyDataService.getRandomImage).toHaveBeenCalledWith(9, 6);
    });
    it('should emit the received data', () => {
      service.images$.pipe(skip(1)).subscribe(data => {
        expect(data).toEqual([...mockImages]);
      });
      service.getImages();
    });
    it('should loader emit true and after that false', () => {
      service.loading$.pipe(skip(1), take(2), toArray()).subscribe(data => {
        expect(data).toEqual([true, false]);
      });
      service.getImages();
    });
  });
});
