import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePhotoRoutingModule } from './single-photo-routing.module';
import { SinglePhotoComponent } from './container/single-photo.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [SinglePhotoComponent],
  imports: [CommonModule, SinglePhotoRoutingModule, MatButtonModule, SharedModule],
})
export class SinglePhotoModule {}
