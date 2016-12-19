import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {TmpoAnimatedGroupComponent,
  TmpoAnimDirective } from './group';

@Component({
  template: `
    <svg tmpoAnimGroup
      transition="all 1s ease-in-out"
      transform="translate3d(300px, 300px, 0) rotate(50deg)"
      stagger="200">
  <polygon points="45.4,58.7 32.9,56.9 24.4,66.2 22.2,53.8 10.7,48.6 21.9,42.7 23.3,30.2 32.3,38.9
	  44.7,36.4 39.2,47.7 " fill="#BC66A0" tmpoAnim />
  <polygon points="65.5,44.9 59.6,36.3 49.1,36.3 55.5,28 52.3,18.1 62.1,21.6 70.6,15.4 70.3,25.9
	  78.7,32 68.7,35 "  fill="#82B378" tmpoAnim />
<polygon points="56.6,82.9 49.7,89.3 51.1,98.6 42.8,94 34.4,98.2 36.2,88.9 29.7,82.2 39,81.1
	43.4,72.8 47.3,81.3 "  fill="#161F76" tmpoAnim />
<polygon points="62.1,74.9 66.4,65.4 60.9,56.5 71.3,57.5 78.1,49.6 80.2,59.8 89.9,63.8 80.8,69
	80,79.4 72.3,72.4"  fill="#F7EC45" tmpoAnim />
<polygon points="83.6,92.9 76.7,99.3 78,108.6 69.8,104 61.4,108.2 63.2,98.9 56.6,92.2 66,91.1
	70.4,82.8 74.3,91.3 "  fill="#C13756" tmpoAnim />
<polygon points="66.5,124.2 59.8,126.1 57.6,132.7 53.7,126.9 46.7,126.8 51,121.4 48.9,114.7
	55.5,117.1 61.2,113.1 60.9,120 "  fill="#C13756" tmpoAnim />
<polygon points="115.7,39.1 107.5,46.8 109.1,57.9 99.3,52.4 89.2,57.3 91.4,46.3 83.6,38.3 94.7,37
	99.9,27.1 104.6,37.2 "  fill="#CF771A" tmpoAnim />
    </svg>
  `,
  styles: [
    `:host, svg {
      width: 100vw;
      height: 100vh;
    }`
  ]
})
export class ExperimentComponent {}


const ROUTES = [{
  path: '', component: ExperimentComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ExperimentComponent,
    TmpoAnimatedGroupComponent,
    TmpoAnimDirective
  ],
})
export class ExperimentModule {}
