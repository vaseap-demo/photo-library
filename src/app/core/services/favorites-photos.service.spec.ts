import { TestBed } from '@angular/core/testing';

import { FavoritesPhotosService } from './favorites-photos.service';
import { MockProvider } from 'ng-mocks';
import { StorageManagerService } from '@core/services/storage-manager.service';
import { ImageEntity } from '@shared/models/image-entity';
import { skip } from 'rxjs';

describe('FavoritesPhotosService', () => {
  let service: FavoritesPhotosService;
  let storageService: StorageManagerService<Array<ImageEntity>>;
  const mockImages: ImageEntity[] = [
    { id: 1, path: '/test1' },
    { id: 2, path: '/test2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MockProvider(StorageManagerService, { getData: () => mockImages })],
    });
    service = TestBed.inject(FavoritesPhotosService);
    storageService = TestBed.inject(StorageManagerService);
    spyOn(storageService, 'saveData');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set default data', () => {
    service.images$.pipe().subscribe(data => {
      expect(data).toEqual([...mockImages]);
    });
  });

  describe('#addImage', () => {
    it('should add a new image and save to storage', () => {
      const mockImage = { id: 3, path: '/test3' };
      service.images$.pipe(skip(1)).subscribe(data => {
        expect(data.at(-1)).toEqual(mockImage);
      });
      service.addImage(mockImage);
      expect(storageService.saveData).toHaveBeenCalledOnceWith('favouritesPhotos', [...mockImages, mockImage]);
    });

    it('should not add a new image if image exists already', () => {
      service.addImage(mockImages[0]);
      expect(storageService.saveData).not.toHaveBeenCalled();
    });
  });

  describe('#deleteImage', () => {
    it('should delete a image', () => {
      service.images$.pipe(skip(1)).subscribe(data => {
        expect(data).toEqual([mockImages[1]]);
      });
      service.deleteImage(1);
      expect(storageService.saveData).toHaveBeenCalledOnceWith('favouritesPhotos', [mockImages[1]]);
    });
    it('should not delete a image if is not exist', () => {
      service.images$.pipe(skip(1)).subscribe(data => {
        expect(data).toEqual([...mockImages]);
      });
      service.deleteImage(10);
      expect(storageService.saveData).toHaveBeenCalledOnceWith('favouritesPhotos', [...mockImages]);
    });
  });
});
