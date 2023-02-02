import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SinglePhotoViewService } from '../services/single-photo-view.service';
import { ImageEntity } from '@shared/models/image-entity';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
  providers: [SinglePhotoViewService],
})
export class SinglePhotoComponent {
  image$: Observable<ImageEntity>;

  constructor(private route: ActivatedRoute, private viewService: SinglePhotoViewService) {
    this.image$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.viewService.getImageById(+params?.get('id')!);
      })
    );
  }

  removeFromFavorites(id: number): void {
    this.viewService.removeImageFromFavorites(id);
  }
}
