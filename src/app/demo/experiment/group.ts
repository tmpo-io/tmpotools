import {
  Component, Directive,
  ContentChildren, AfterContentInit, AfterContentChecked, OnInit,
  Input, QueryList, ElementRef, Renderer
} from '@angular/core';


@Directive({
  selector: '[tmpoAnim]'
})
export class TmpoAnimDirective implements OnInit {

  @Input() tmpoAnim: string;
  @Input() from: string;
  @Input() set to(v: string) {
    console.log('Set to', v);
  };
  @Input() delay: number;
  @Input() set state(s: string) {

  }

  // @Input() set transition(value: string) {
  //   setTimeout(() =>
  //     this.render.setElementStyle(this.el.nativeElement, 'transition', value), 0);
  // }

  private props: any = {};

  constructor(
    private el: ElementRef,
    private render: Renderer) { }

  setStyle(prop: string, value: string) {
    this.render.setElementStyle(this.el.nativeElement, prop, value);
  }


  ngOnInit() {
    // this.render.setElementStyle(this.el, )
  }

}



@Component({
  selector: '[tmpoAnimGroup]',
  template: '<ng-content></ng-content>'
})
export class TmpoAnimatedGroupComponent implements AfterContentInit, AfterContentChecked {

  @Input() transition: string;
  @Input() stagger: number;
  @Input() transform: string;

  @ContentChildren(TmpoAnimDirective) group: QueryList<TmpoAnimDirective>;

  ngAfterContentInit() {
    // console.log('Group', this.group);
    let i = 0;
    this.group.forEach(el => {
      el.setStyle('transition', this.transition);
      el.setStyle('transition-delay', this.stagger * i + 'ms');
      i++;
      setTimeout(() => {
        console.log(el);
        if  (!el.tmpoAnim) {
          el.setStyle('transform', this.transform);
        } else {
          el.setStyle('transform', el.tmpoAnim);
        }
      }, 1);
    });
  }

  ngAfterContentChecked() {

  }

}



