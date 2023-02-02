import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-container">
      <mat-spinner *ngIf="visible"></mat-spinner>
    </div>
  `,
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() visible: boolean | null = false;
}
