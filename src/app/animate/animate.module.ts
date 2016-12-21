
import {
  Component, Directive, Input,
  NgModule, Output, HostBinding,
  HostListener, ElementRef, ContentChildren, QueryList,
  AfterContentInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';


// This is an ugly hack to get a callback on Component
// destruction
import {
  animate, state, style,
  transition, trigger, AnimationPlayer
} from '@angular/core';


export interface AnimationDuration {
  duration: number;
  iterations: number;
  delay?: number;
  easing?: string;
  direction?: string;
  fill?: string;
}


@Directive({
  selector: '[tmpoWebAnimate]'
})
export class TmpoWebAnimateDirective implements OnDestroy {

  @Input()
  set tmpoWebAnimate(keyframes: string) {
    // console.log(keyframes);
    if (this.player) {
      this.player.cancel();
    }
    if (!keyframes) {
      return;
    };

    if (this.keyframes) {
      this.keyframes = keyframes;
    }

    this.player = this.animate(keyframes, this.timming);
    this.player.play();
  };

  @Input()
  timming: AnimationDuration = {
    duration: 500,
    iterations: 1,
    easing: 'ease-in-out',
    fill: 'forwards'
  };

  player: any;
  keyframes: any;

  constructor(private el: ElementRef) { }

  animate(keyframes: any, timming: AnimationDuration): any {
    return this.el.nativeElement
      .animate(keyframes, timming);
  }

  back() {
    if (this.player) {
      this.player.reverse();
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.cancel();
    }
  }

}


@Component({
  selector: 'tmpo-groupAnimate',
  template: `
    <ng-content></ng-content>
  `,
  animations: [
    trigger('tmpo', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('void => in', animate('1s linear')),
      transition('* => void', animate('0.7s linear'))
    ])
  ]
})
export class TmpoGroupAnimateComponent implements AfterContentInit {

  @HostBinding('@tmpo') status = 'in';

  @ContentChildren(TmpoWebAnimateDirective)
  group: QueryList<TmpoWebAnimateDirective>;

  @Input()
  stagger: number;

  @Input()
  keyframes: [{ [key: string]: string }];

  @Input()
  timming: any = {};

  private total: number = 0;

  @HostListener('@tmpo.start', ['$event'])
  animationStart(event: any) {
    // console.log('Animation start event: ', event);
    if (event.toState === 'void') {
      this.group.map((el, i) => {
        el.timming = this.buildStagger(el, i, true);
        el.timming.direction = 'reverse';
        el.tmpoWebAnimate = this.buildKeyframes(el);
      });
    }
  }

  ngAfterContentInit() {
    this.total = 0;
    this.group.forEach((el, i) => {
      el.timming = this.buildStagger(el, i);
      // console.log(this.buildKeyframes(el));
      el.tmpoWebAnimate = this.buildKeyframes(el);
      this.total++;
    });
  }

  private buildKeyframes(el: any): any {
    if (el.keyframes) {
      return el.keyframes;
    }
    return this.keyframes;
  }

  private buildStagger(props, num: number, reverse = false): any {
    let delay;
    if (!reverse) {
      delay = num * this.stagger;
    } else {
      delay = (this.total * this.stagger) - (num * this.stagger);
    }

    return Object.assign({},
      this.timming,
      props.timming, {
        delay
      });
  }

}





@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TmpoGroupAnimateComponent,
    TmpoWebAnimateDirective
  ],
  exports: [
    TmpoGroupAnimateComponent,
    TmpoWebAnimateDirective
  ]
})
export class TmpoAnimateModule { }
