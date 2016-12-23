
import {
  Component, Directive, Input,
  NgModule, Output, HostBinding,
  HostListener, ElementRef, ContentChildren, QueryList,
  AfterContentInit, OnDestroy, OnChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

import * as utils from './utils';

// declare const Infinity: any;

/*
This is an ugly hack to get a callback on Component
   destruction.
   What we do is create a dummy animation on :host GroupTransition
   and use it's callback to trigger animation destroy
*/
import {
  animate, state, style,
  transition, trigger, AnimationPlayer
} from '@angular/core';


export interface AnimationProps {
  duration: number;
  iterations: number;
  iterationStart?: number;
  delay?: number;
  endDelay?: number;
  direction?: string;
  easing?: string;
  fill?: string;
}

export const BASE_PROPS: AnimationProps = {
  duration: 500,
  iterations: Infinity,
  easing: 'ease-in-out',
  fill: 'forwards'
};


@Directive({
  selector: '[tmpoWebAnimate]'
})
export class TmpoWebAnimateDirective implements OnDestroy, OnChanges {

  @Input()
  set tmpoWebAnimate(keyframes: any) {
    if (!keyframes) {
      return;
    };
    if (!this._keyframes) {
      this._keyframes = keyframes;
    }
  };

  @Input()
  set keyframes(keyframes: any) {
    this.tmpoWebAnimate = keyframes;
  }

  @Input()
  set animProps(props) {
    // console.log('setter animprops', props);
    this._animProps = Object.assign({}, BASE_PROPS, props);
    this.ownsProps = true;
  };

  get animProps(): AnimationProps {
    return this._animProps;
  }

  player: any;
  _keyframes: any;
  ownsProps: boolean = false;

  private _animProps = BASE_PROPS;

  constructor(private el: ElementRef) { }

  get keyframes() {
    return this._keyframes;
  }

  animate() {
    if (this.player) {
      this.player.cancel();
    }
    this.player = this.el.nativeElement
      .animate(this.keyframes, this.animProps);
    // console.log(this.player, this.animProps);
    this.player.play();
  }

  back() {
    if (this.player) {
      this.player.reverse();
    }
  }

  ngOnChanges() {
    console.log('changes');
    this.animate();
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
  animProps: any = {};

  @HostListener('@tmpo.start', ['$event'])
  animationStart(event: any) {
    if (event.toState === 'void') {
      this.animate(true);
    }
  }

  ngAfterContentInit() {
    this.animate();
  }

  animate(reverse = false) {
    // take the list
    let stagger = (reverse === false) ?
      utils.getStagger(this.stagger) :
      utils.getStaggerReverse(this.stagger, this.group.length);

    this.group
      .map(utils.addProps(this.animProps))
      .map(stagger)
      .map(utils.ensureIterations)
      .map(utils.addReverse(reverse))
      .map(utils.getKeyframes(this.keyframes))
      .map(el => el.animate());

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
