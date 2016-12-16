
import {
  Directive, Input, ElementRef,
  Renderer, OnInit, NgModule
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


@NgModule({
  declarations: [StaggeredDirective],
  exports: [StaggeredDirective]
})
export class TmpoStaggeredModule {}

