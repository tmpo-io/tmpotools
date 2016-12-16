
import { Component } from '@angular/core';


@Component({
  styles: [`
   div {
     transition: all 1s ease-in; opacity: 0 }
   div.tmpoIn {
     opacity: 1
   }
  `],
  templateUrl: './staggered.component.html'
})
export class DemoStaggeredComponent {

  values: string[] = ['item 1',
    'item 2', 'item 3', 'item 4',
    'item 5', 'item 6', 'item 7',
    'item 8', 'item 9', 'item 10'
  ];
}
