import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageEntity } from '@shared/models/image-entity';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('1s ease-out', style({ opacity: 1 }))]),
    ]),
  ],
})
export class PhotoListComponent {
  @Input() images: ImageEntity[] = [];
  @Output() imageClicked: EventEmitter<ImageEntity> = new EventEmitter<ImageEntity>();

  imageSelected(image: ImageEntity): void {
    this.imageClicked.emit(image);
  }
}
