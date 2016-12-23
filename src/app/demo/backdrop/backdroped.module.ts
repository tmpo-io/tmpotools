import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { TmpoBackdropModule } from '../../backdrop/backdrop';
import { TmpoCountDownComponent } from './countdown.component';

@Component({
  styles: [`
    tmpo-backdrop {
      z-index: 100;
    }
    tmpo-countdown {
      z-index: 1000;
      width: 40%;
      height: 40%;
      color: #fff;
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
    <tmpo-backdrop color="#52779c" #bd2 *ngIf="counter"
      (closed)="counter=false">
      <tmpo-countdown (done)="bd2.close()"></tmpo-countdown>
    </tmpo-backdrop>

    <div class="middle">
      <h2>This is the content showed inside the mask</h2>
      <button (click)="show=true">Open With content</button>
      <button (click)="counter=true">Open with counter</button>
    </div>
  `
})
export class BackdropedDemoComponent {

  show = false;
  counter = true;

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
    BackdropedDemoComponent,
    TmpoCountDownComponent
  ],
})
export class DemoBackdropedModule { }
