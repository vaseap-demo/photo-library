import { Injectable } from '@angular/core';
import { ImageEntity } from '@shared/models/image-entity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SinglePhotoDataService {
  getFullImageById(id: number): Observable<ImageEntity> {
    return of({ id, path: `https://picsum.photos/id/${id}/1920/800` });
  }
}
