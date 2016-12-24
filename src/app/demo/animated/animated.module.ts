import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TmpoAnimateModule } from '../../animate/animate.module';
import { AppExample1Component } from './example1.component';
import { AppExample2Component } from './example2.component';


export const DEFAULT_ANIM = [
  { transform: 'translate3d(-50%, 0, 0)' },
  { transform: 'translate3d(0, 0, 0)' }
];



@Component({
  templateUrl: './animated.component.html',
  styles: [
    `
    tmpo-groupAnimate {
      margin-top: 40px;
      width: 400px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    `
  ]
})
export class AnimatedComponent {

  active = true;

  animation = DEFAULT_ANIM;

  items = Array.apply(null, { length: 50 })
    .map(Number.call, Number);

  constructor(private router: Router) {

  }


  rand() {
    this.active = false;
    setTimeout(() => this.active = true, 1000);
  }

}


const ROUTES = [{
  path: '', component: AnimatedComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    TmpoAnimateModule,
  ],
  declarations: [
    AnimatedComponent,
    AppExample1Component,
    AppExample2Component,
  ],
})
export class AnimatedDemoModule { }
