import { Injectable } from '@angular/core';
import { SinglePhotoDataService } from './single-photo-data.service';
import { Observable } from 'rxjs';
import { ImageEntity } from '@shared/models/image-entity';
import { FavoritesPhotosService } from '@core/services/favorites-photos.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any',
})
export class SinglePhotoViewService {
  constructor(
    private dataService: SinglePhotoDataService,
    private favoritesService: FavoritesPhotosService,
    private router: Router
  ) {}

  getImageById(id: number): Observable<ImageEntity> {
    return this.dataService.getFullImageById(id);
  }

  removeImageFromFavorites(id: number): void {
    this.favoritesService.deleteImage(id);
    this.router.navigate(['/favorites']);
  }
}
