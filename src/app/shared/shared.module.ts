import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';

@NgModule({
  declarations: [PhotoListComponent, LoaderComponent, InfiniteScrollDirective],
  exports: [PhotoListComponent, LoaderComponent, InfiniteScrollDirective],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class SharedModule {}
