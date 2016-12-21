import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TmpoAnimateModule } from '../../animate/animate.module';

export const DEFAULT_ANIM = [
  {transform: 'translate3d(-50%, 0, 0)'},
  {transform: 'translate3d(0, 0, 0)'}
  ];

@Component({
  template: `
  <div class='content'>
    <tmpo-groupAnimate *ngIf="active"
      stagger="50" [keyframes]="animation">
      <ul>
        <li *ngFor="let item of items" tmpoWebAnimate>{{ item }}</li>
      </ul>
    </tmpo-groupAnimate>
    <button (click)="leave()" *ngIf="active">Navigate</button>
  </div>
  `,
  styles: [
    `
    `
  ]
})
export class Experiment2Component {

  active = true;

  animation = DEFAULT_ANIM;

  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  constructor(private router: Router) { }

  leave() {
    this.active = false;
    setTimeout(() =>
      this.router.navigate(['/experiment']), 1010);
  }

}


const ROUTES = [{
  path: '', component: Experiment2Component
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    TmpoAnimateModule,
  ],
  declarations: [
    Experiment2Component,

  ],
})
export class Experiment2Module { }




/*
  <svg tmpoAnimGroup
      transition="all 1s ease-in-out"
      transform="translate3d(300px, 300px, 0) rotate(50deg)"
      stagger="200">

    </svg>
*/
