import { Component } from '@angular/core';
import { FavoritesPhotosService } from '@core/services/favorites-photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  readonly images$ = this.favoritesService.images$;

  constructor(private favoritesService: FavoritesPhotosService, private router: Router) {}

  navigateToImagePage(id: number) {
    this.router.navigate([`/photos/${id}`]);
  }
}
