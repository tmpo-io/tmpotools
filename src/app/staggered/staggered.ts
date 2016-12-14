
import {
  Directive, Input, ElementRef,
  Renderer, OnInit, NgModule
} from '@angular/core';

@Directive({
  selector: '[tmpo-staggered]'
})
export class StaggeredDirective implements OnInit {

  @Input() appStaggered: number;

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
    return this.appStaggered + 'ms';
  }

}


@NgModule({
  declarations: [StaggeredDirective],
  exports: [StaggeredDirective]
})
export class TmpoStaggeredModule {}

