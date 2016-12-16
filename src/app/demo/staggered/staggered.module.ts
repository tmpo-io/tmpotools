import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { TmpoStaggeredModule } from '../../staggered/staggered';

import { DemoStaggeredComponent } from './demo.component';


const ROUTES: Routes = [{
  path: '', component: DemoStaggeredComponent
}]


 @NgModule({
   imports: [
     CommonModule,
     TmpoStaggeredModule,
     RouterModule.forChild(ROUTES)
   ],
   declarations: [
     DemoStaggeredComponent
   ]
 })
 export class DemoStaggeredModule {}
