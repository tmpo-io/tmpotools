
import {
  Directive, Input, Output, ElementRef,
  Renderer, OnInit, NgModule, HostBinding, EventEmitter
} from '@angular/core';

@Directive({
  selector: '[tmpoStaggered]'
})
export class StaggeredDirective implements OnInit {

  @Input() tmpoStaggered: number;

  constructor(private el: ElementRef,
    private renderer: Renderer) { }

  ngOnInit() {

    // console.log('Element', this.el);
    this.renderer.setElementStyle(
      this.el.nativeElement, 'transition-delay', this.delay
    );
    setTimeout(() => {
      this.renderer.setElementClass(
        this.el.nativeElement, 'tmpoIn', true);
    }, 0);

  }

  get delay(): string {
    return this.tmpoStaggered + 'ms';
  }

}

@Directive({
  selector: '[tmpoAnimatedSvg]'
})
export class AnimatedSvgDirective implements OnInit {

  @Input() tmpoAnimatedSvg: number = 0;
  @Input() transition: string;
  @Output() endTransition = new EventEmitter<boolean>();

  private started = false;

  constructor(private el: ElementRef,
    private renderer: Renderer) { }

  @Input() set toProps(props: { [key: string]: string }) {

    if (this.transition && this.transition !== '') {
      this.renderer.setElementStyle(
        this.el.nativeElement, 'transition', this.transition
      );
    }

    this.renderer.setElementStyle(
      this.el.nativeElement, 'transition-delay', this.delay
    );
    setTimeout(() => {
      this.started = true;
      Object.keys(props).forEach(k => {
        this.renderer.setElementAttribute(
          this.el.nativeElement, k, props[k]);
      }, 0);
    });


  }

  get delay(): string {
    return this.tmpoAnimatedSvg + 'ms';
  }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'transitionend', (p) => {
      if (this.started) {
        this.endTransition.next(true);
        this.started = false;
      }
    });
  }


}



@NgModule({
  declarations: [
    StaggeredDirective,
    AnimatedSvgDirective
  ],
  exports: [
    StaggeredDirective,
    AnimatedSvgDirective
  ]
})
export class TmpoStaggeredModule { }



