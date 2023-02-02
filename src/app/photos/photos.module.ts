import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './container/photos.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, PhotosRoutingModule, SharedModule],
})
export class PhotosModule {}
