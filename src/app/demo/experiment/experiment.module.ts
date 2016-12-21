import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {TmpoAnimatedGroupComponent,
  TmpoAnimDirective } from './group';

import { TmpoStaggeredModule } from '../../staggered/staggered';

@Component({
  template: `
    <svg>
      <rect x="0" y="20%" height="0" width="100%" fill="#ffffff"
        tmpoAnimatedSvg="100"
        [toProps]="{height: '80%' }"
        />
      <rect x="0" y="0" height="0" width="100%" fill="#558abb"
        tmpoAnimatedSvg
        [toProps]="{height: '20%' }"
        transition="all 200ms cubic-bezier(0, 0, 0.96,-0.07)"
        />
    </svg>
  `,
  styles: [
    `:host {
      position: absolute;
      top: 0; left:0; right:0; bottom:0;
    }
    svg {
      width: 50%;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    svg rect {
      transition: all 0.4s cubic-bezier(0, 0, 0.94, 0.26);
    }
    `
  ]
})
export class ExperimentComponent {}


const ROUTES = [{
  path: '', component: ExperimentComponent
}];


@NgModule({
  imports: [
    CommonModule,
    TmpoStaggeredModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ExperimentComponent,
    TmpoAnimatedGroupComponent,
    TmpoAnimDirective

  ],
})
export class ExperimentModule {}




/*
  <svg tmpoAnimGroup
      transition="all 1s ease-in-out"
      transform="translate3d(300px, 300px, 0) rotate(50deg)"
      stagger="200">

    </svg>
*/
