import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {TmpoAnimatedGroupComponent,
  TmpoAnimDirective } from './group';

@Component({
  template: `
    <tmpoAnimGroup
      transition="all 1s ease-in"
      stagger="500">
      <p tmpoAnim="translate(-20%, 0)">this is a test 1</p>
      <p tmpoAnim="translate(20%, 0)">this is a test 2</p>
      <p tmpoAnim="translate(-20%, 0)">this is a test 3</p>
      <p tmpoAnim="translate(-20%, 0)">this is a test 4</p>
    </tmpoAnimGroup>
  `
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
