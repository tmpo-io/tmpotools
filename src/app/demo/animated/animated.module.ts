import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TmpoAnimateModule } from '../../animate/animate.module';
import { AppExample1Component } from './example1.component';

export const DEFAULT_ANIM = [
  { transform: 'translate3d(-50%, 0, 0)' },
  { transform: 'translate3d(0, 0, 0)' }
];



@Component({
  templateUrl: './animated.component.html',
  styles: [
    `
    `
  ]
})
export class AnimatedComponent {

  active = true;

  animation = DEFAULT_ANIM;

  items = Array.apply(null, {length: 50})
    .map(Number.call, Number);

  constructor(private router: Router) {

  }

  leave() {
    this.active = false;
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
    AppExample1Component
  ],
})
export class AnimatedDemoModule { }
