import {
  Component, EventEmitter, OnInit, OnDestroy, NgModule,
  Input, Output, ViewChild, Renderer
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { TmpoBrowserModule, WindowService } from '../browser/browser';


export type BackdropDirection = 'open' | 'close';


@Component({
  selector: 'tmpo-backdrop',
  template: `

    <ng-content *ngIf="this.ready"></ng-content>
    <div class="circle" #ref
      [style.border-color]="color"
      [style.width.px]="width"
      [style.height.px]="height"
      [style.border-width.px]="border"></div>
  `,
  styles: [
  `:host {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
     }

     .circle {
      //  pointer-events: none;
       position: absolute;
       top: 50%;
       left: 50%;
       border: 1px solid black;
       transform: translate(-50%, -50%);
       border-radius: 50%;
     }
  `
  ],
})
export class TmpoBackdropComponent implements OnInit {


  @Input() color: string = '#000000';
  @Input() delay: number = 1;
  @Input() transition: string = 'all 800ms cubic-bezier(1,.01,0,.99)';

  @Output() closed = new EventEmitter<boolean>();

  width = 1000;
  height = 1000;
  border = 1;
  ready = false;

  @ViewChild('ref') ref: any;

  constructor(
    private renderer: Renderer,
    private win: WindowService
  ) { }


  ngOnInit() {
    this.open();
  }

  close() {

    let diagonal = this.getViewPortDiagonal();
    setTimeout(() => {
      this.ready = false;
      this.width = this.height = this.border = diagonal;
    }, this.delay);

    setTimeout(() => this.closed.next(true), 800);

  }

  getViewPortDiagonal(): number {
    let vport = this.win.getViewportSize();
    return Math.sqrt(
      Math.pow(vport.width, 2) + Math.pow(vport.height, 2)
    );
  }

  open() {

    let diagonal = this.getViewPortDiagonal();
    this.width = this.height = diagonal;

    this.renderer.setElementStyle(this.ref.nativeElement,
      'transition', this.transition);

    setTimeout(() => {
      this.width = this.height = 0;
      this.border = diagonal;
    }, this.delay);

    setTimeout(() => this.ready = true, 801);

  }


}



@NgModule({
  imports: [CommonModule, TmpoBrowserModule],
  declarations: [TmpoBackdropComponent],
  exports: [TmpoBackdropComponent]
})
export class TmpoBackdropModule { }
