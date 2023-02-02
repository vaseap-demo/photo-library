import { Directive, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnInit {
  @Output() scrolled: EventEmitter<void> = new EventEmitter<void>();
  private lastHeight = 0;
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initTheIntersection();
  }

  private initTheIntersection() {
    const target = this.addTheTargetElement();

    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
      // The last height is checked to not emit the new event if the new content has not been rendered yet
      if (entry.isIntersecting && this.el.nativeElement.offsetHeight != this.lastHeight) {
        this.lastHeight = this.el.nativeElement.offsetHeight;
        this.scrolled.emit();
      }
    }, this.options);

    observer.observe(target);
  }

  private addTheTargetElement() {
    const target = this.renderer.createElement('span');
    this.renderer.addClass(target, 'infinite-anchor');
    const text = this.renderer.createText('');
    this.renderer.appendChild(target, text);
    this.renderer.appendChild(this.el.nativeElement, target);
    return target;
  }
}
