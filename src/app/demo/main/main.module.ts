import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: '',
    component: MainComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
