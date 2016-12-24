
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-example2',
  template: `

  <div class="box"
    [style.background-color]="color"></div>

  `,
  styles: [
    `
    :host {
      width: 40px;
      height: 40px;
    }
    .box {
      width: 40px;
      height: 40px;
    }
    `
  ]
})
export class AppExample2Component implements OnInit {
  @Input()
  delay: number = 1;

  colors = ['#F57336', '#7F1637', '#047878', '#FFB733', '#C22121'];
  color: string;

  ngOnInit() {
    this.color = this.colors[this.rand(this.colors.length)];
  }

  rand(y: number): number {
    return Math.round(Math.random() * (y - 1));
  }


}



// @Component({
//   selector: 'tmpo-generator',
//   template: '<ng-content *ngFor="let item of amount"></ng-content>'
// })
// export class TmpoGeneratorComponent implements OnInit {

//   @Input()
//   number = 3;

//   amount: number[] = [];


//   ngOnInit() {
//     for (let i = 0; i < this.number; i++) {
//       this.amount.push(i);
//     }
//   }


// }
