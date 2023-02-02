import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationLink } from './nav-link';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  links: NavigationLink[] = [
    { title: 'Photos', path: '' },
    { title: 'Favorites', path: 'favorites' },
  ];
}
