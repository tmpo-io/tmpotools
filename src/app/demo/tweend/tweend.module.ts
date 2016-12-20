

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
      left: 0px;
      top: 0px;
      width: 30px;
      height: 30px;
      background-color: red;
    }
    button {
      margin-top: 15px;
    }
  `],
  template: `
    <div class="content">
      <p>Click anywhere on document to tween object</p>
    <div>
    <div class="box"
      [style.top.px]="top"
      [style.left.px]="left"><div>
  `
})
export class TweenDemoComponent {

  top: number = 100;
  left: number = 30;

  constructor(public tween: TmpoTweenService) { }

  @HostListener('window:click', ['$event'])
  tweenTo(e) {
    console.log(e);
    this.tween.stopAll();
    this.tween.to(this, 1000, {
      top: e.layerY - 15,
      left: e.layerX - 15
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
