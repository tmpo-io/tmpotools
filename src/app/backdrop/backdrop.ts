import {
  Component, OnInit, OnDestroy, NgModule, Input, HostListener
} from '@angular/core';

import { CommonModule } from '@angular/common';


export type BackdropDirection = 'in' | 'out';


@Component({
  selector: 'tmpo-backdrop',
  template: `
    <svg width="100%" height="100%">
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" />
          <svg:circle [attr.r]="radius" cx="50%" cy="50%" fill="black" />
        </mask>
      </defs>
      <svg:rect width="100%" height="100%" [attr.fill]="color" mask="url(#hole)" />
    </svg>
  `,
  styles: [
    `:host {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
     }
     circle {
       transition: all 0.6s ease-in-out;
     }
     `
  ]
})
export class TmpoBackdropComponent {

  radius: string = '100%';

  @Input() color: string = '#000000';
  @Input() delay: number = 0;

  @Input() set direction(name: BackdropDirection) {
    if (name === 'in') {
      this.radius = '0%';
      setTimeout(() => this.radius = '75%', this.delay);
      // @todo .. set pointer-events to true on end...
      return;
    }
    this.radius = '75%';
    setTimeout(() => this.radius = '0%', this.delay);
    // @todo enable pointer events on end..
  }



}


@NgModule({
  imports: [CommonModule],
  declarations: [TmpoBackdropComponent],
  exports: [TmpoBackdropComponent]
})
export class TmpoBackdropModule { }
