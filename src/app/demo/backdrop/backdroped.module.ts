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
      color: #fff;
    }
    button {
      margin-top: 30px;
    }
  `],
  template: `
    <tmpo-backdrop color="#52779c" #bd
      *ngIf="show"
      (closed)="show=false">
      <div class="middle front">
        <p>This content will be showed inside the backdrop</p>
        <button (click)="bd.close()">Close</button>
      </div>
    </tmpo-backdrop>
    <div class="middle">
      <h2>This is the content showed inside the mask</h2>
      <button (click)="show=true">Open</button>
    </div>
  `
})
export class BackdropedDemoComponent {

  show = false;


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
