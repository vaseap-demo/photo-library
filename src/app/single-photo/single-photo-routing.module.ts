import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePhotoComponent } from './container/single-photo.component';

const routes: Routes = [
  { path: ':id', component: SinglePhotoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePhotoRoutingModule {}
