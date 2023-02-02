import { Component, OnInit } from '@angular/core';
import { PhotosViewService } from '../services/photos-view.service';
import { ImageEntity } from '@shared/models/image-entity';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [PhotosViewService],
})
export class PhotosComponent implements OnInit {
  readonly images$ = this.viewService.images$;
  readonly loading$ = this.viewService.loading$;

  constructor(private viewService: PhotosViewService) {}

  ngOnInit() {
    this.viewService.getImages();
  }

  next() {
    this.viewService.getImages();
  }

  selectAnImage(image: ImageEntity) {
    this.viewService.addImageToFavourites(image);
  }
}
