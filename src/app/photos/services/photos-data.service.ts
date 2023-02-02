import { Injectable } from '@angular/core';
import { delay, map, Observable, range, shareReplay, toArray } from 'rxjs';
import { ImageEntity } from '@shared/models/image-entity';

@Injectable({
  providedIn: 'root',
})
export class PhotosDataService {
  getRandomImage(currentIndex: number, limit: number): Observable<ImageEntity[]> {
    return range(currentIndex, limit).pipe(
      shareReplay(),
      map(i => ({ path: `https://picsum.photos/id/${i}/400/300`, id: i })),
      toArray(),
      delay(300)
    );
  }
}
