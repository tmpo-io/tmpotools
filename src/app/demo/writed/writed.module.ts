
import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { TmpoWriterModule } from '../../writer/writer';

@Component({
  styles: [`
    tmpo-writer {
      display: block;
      padding-top: 40px;
      font-size: 18px;
    }
  `],
  template: `
    <div class="content">
    <h2>Text writer</h2>
    <hr>
    <button (click)="replay()">Replay</button>
    <div *ngIf="active">
    <tmpo-writer
      text="THIS IS A WRITTER DEMO!"
      [matrix]="true"
      (complete)="next()"></tmpo-writer>
    <tmpo-writer
      *ngIf="step>0"
      delay="1000"
      speed="20"
      text="WITH TWO ELEMENTS AND A DELAY"
      (complete)="next()"></tmpo-writer>
    </div>

    </div>
  `
})
export class WritedDemoComponent {

  step: number = 0;
  active: boolean = true;

  constructor() { }

  next() {
    this.step++;
  }

  replay() {
    this.active = false;
    this.step = 0;
    setTimeout(() => this.active = true, 0);
  }

}


const ROUTES = [{
  path: '', component: WritedDemoComponent
}];


@NgModule({
  imports: [
    CommonModule,
    TmpoWriterModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    WritedDemoComponent
  ],
})
export class DemoWritedModule { }
