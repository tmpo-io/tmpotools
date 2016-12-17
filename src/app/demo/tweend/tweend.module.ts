

import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import {
  TmpoTweenModule,
  TmpoTweenService
} from '../../tween/tween';

import { Easing } from '../../tween/easing';

@Component({
  styles: [`
    .box {
      position: absolute;
      left: 20px;
      top: 30px;
      width: 100px;
      height: 100px;
      background-color: red;
    }
    button {
      margin-top: 15px;
    }
  `],
  template: `
    <p>Click anywhere on document to tween object</p>
    <div class="box"
      [style.top.px]="top"
      [style.left.px]="left"><div>
  `
})
export class TweenDemoComponent {

  top: number = 30;
  left: number = 10;

  constructor(public tween: TmpoTweenService) { }

  tweenIt() {
    let t = this.tween.to(this, 1000, {
      top: 100,
      left: 500
    }, Easing.easeInBack).subscribe(v => Object.assign(this, v));
  }

  @HostListener('window:click', ['$event'])
  tweenTo(e) {
    console.log(e);
    this.tween.to(this, 1000, {
      top: e.pageY,
      left: e.pageX
    }, Easing.easeOutElastic)
    .subscribe(v => Object.assign(this, v));
  }


}


const ROUTES = [{
  path: '', component: TweenDemoComponent
}];


@NgModule({
  imports: [
    CommonModule,
    TmpoTweenModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    TweenDemoComponent
  ],
})
export class DemoTweenModule { }
