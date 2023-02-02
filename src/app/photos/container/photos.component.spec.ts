import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { PhotoListComponent } from '@shared/components/photo-list/photo-list.component';
import { PhotosViewService } from '../services/photos-view.service';
import { ImageEntity } from '@shared/models/image-entity';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let spyView: jasmine.SpyObj<PhotosViewService>;

  beforeEach(async () => {
    spyView = jasmine.createSpyObj('PhotosViewService', ['getImages', 'addImageToFavourites']);
    await TestBed.configureTestingModule({
      declarations: [PhotosComponent, MockComponent(LoaderComponent), MockComponent(PhotoListComponent)],
      providers: [MockProvider(PhotosViewService)],
    })
      .overrideComponent(PhotosComponent, {
        set: {
          providers: [{ provide: PhotosViewService, useValue: spyView }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyView.getImages.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the new data on next', () => {
    component.next();
    expect(spyView.getImages).toHaveBeenCalledTimes(1);
  });
  it('should add image to favorite', () => {
    const image: ImageEntity = { id: 1, path: 'test' };
    component.selectAnImage(image);
    expect(spyView.addImageToFavourites).toHaveBeenCalledOnceWith(image);
  });
});
