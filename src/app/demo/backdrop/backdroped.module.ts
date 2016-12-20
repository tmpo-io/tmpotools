import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { TmpoBackdropModule } from '../../backdrop/backdrop';


@Component({
  styles: [`
    tmpo-backdrop {
      z-index: 100;
    }
    .middle {
      width: 80%;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
    }
    .front {
      z-index: 101;
    }
    button {
      margin-top: 30px;
    }
  `],
  template: `
    <tmpo-backdrop color="#52779c"
      [direction]="direction"
      ></tmpo-backdrop>
    <div class="middle">
      <h2>This is the content showed inside the mask</h2>
      <button (click)="direction='out'">Toggle</button>
    </div>
    <div class="middle front">
      <button (click)="direction='in'"
        *ngIf="direction=='out'">Toggle</button>
    </div>
  `
})
export class BackdropedDemoComponent {

  direction = 'out';


}



const ROUTES = [{
  path: '', component: BackdropedDemoComponent
}];


@NgModule({
  imports: [
    CommonModule,
    TmpoBackdropModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    BackdropedDemoComponent
  ],
})
export class DemoBackdropedModule { }
