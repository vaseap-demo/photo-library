import { Injectable } from '@angular/core';
import { PhotosDataService } from './photos-data.service';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { ImageEntity } from '@shared/models/image-entity';
import { FavoritesPhotosService } from '@core/services/favorites-photos.service';

@Injectable({
  providedIn: 'any',
})
export class PhotosViewService {
  private imagesSub: BehaviorSubject<ImageEntity[]> = new BehaviorSubject<ImageEntity[]>([]);
  public readonly images$: Observable<ImageEntity[]> = this.imagesSub.asObservable();
  private loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly loading$: Observable<boolean> = this.loadingSub.asObservable();

  private limit = 6;
  private currentIndex = 0;
  private defaultNumberOfImages = 9;

  constructor(private dataService: PhotosDataService, private favouritesService: FavoritesPhotosService) {}

  getImages(): void {
    this.loadingSub.next(true);
    const limit = this.currentIndex === 0 ? this.defaultNumberOfImages : this.limit;
    const obs = this.dataService.getRandomImage(this.currentIndex, limit);

    obs.pipe(finalize(() => this.loadingSub.next(false))).subscribe(res => {
      this.imagesSub.next([...this.imagesSub.getValue(), ...res]);
      this.currentIndex += limit;
    });
  }

  addImageToFavourites(image: ImageEntity): void {
    this.favouritesService.addImage(image);
  }
}
