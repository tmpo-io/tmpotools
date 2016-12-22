
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-example2',
  template: `

  <div class="circle"></div>

  `,
  styles: [
    `
    :host {
      display: block;
      width: 300px;
      height: 300px;
      position: relative;
    }
    .circle {
      position: absolute;
      height: 50%;
      width: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 3px solid #004358;
      border-radius: 50%;
    }
    `
  ]
})
export class AppExample2Component {
  @Input()
  delay: number = 1;
}
