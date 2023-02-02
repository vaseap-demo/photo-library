import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ImageEntity } from '@shared/models/image-entity';
import { StorageManagerService } from '@core/services/storage-manager.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesPhotosService {
  private imagesSub: BehaviorSubject<ImageEntity[]> = new BehaviorSubject<ImageEntity[]>([]);
  public readonly images$: Observable<ImageEntity[]> = this.imagesSub.asObservable();
  private readonly storageKey = 'favouritesPhotos';

  constructor(private storageService: StorageManagerService<Array<ImageEntity>>) {
    // Set the default data
    const favouritesImages = this.storageService.getData(this.storageKey);
    if (favouritesImages) {
      this.imagesSub.next(favouritesImages);
    }
  }

  addImage(image: ImageEntity): void {
    const currentValue: ImageEntity[] = [...this.imagesSub.getValue()];
    const existingImage = currentValue.find(i => i.id === image.id);
    if (!existingImage) {
      const allImages = [...this.imagesSub.getValue(), image];
      this.imagesSub.next(allImages);
      this.storageService.saveData(this.storageKey, allImages);
    }
  }

  deleteImage(id: number): void {
    const images = [...this.imagesSub.getValue()].filter(i => i.id !== id);
    this.imagesSub.next(images);
    this.storageService.saveData(this.storageKey, images);
  }
}
