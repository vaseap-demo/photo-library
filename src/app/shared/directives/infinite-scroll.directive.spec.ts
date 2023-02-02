import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<MockScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollDirective, MockScrollComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockScrollComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should create the target element', () => {
    const el = fixture.nativeElement.querySelector('.infinite-anchor');
    expect(el).toBeDefined();
  });
});

@Component({
  template: ` <div class="test-container" appInfiniteScroll></div>`,
})
class MockScrollComponent {}
