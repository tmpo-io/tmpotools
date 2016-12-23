import {
  Component, OnInit, OnDestroy, Input,
  Output, EventEmitter
} from '@angular/core';
import {
  animate, state, style, trigger, transition
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';


export function getSwitcher(delay: number): Observable<boolean> {
  return Observable
    .interval(delay)
    .map(a => true)
    .startWith(false)
    .take(2);
}

@Component({
  selector: 'tmpo-countdown',
  template: `
    <div class="counter" [@counter]="'in'"
      *ngIf="switch$ | async">{{ current }}</div>`,
  styles: [
    `
    .counter {
      display: flex;
      width: 100%;
      height: 100%;
      font-size: 200px;
      font-weight: bolder;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 50%;
      border: 20px solid #fff;
      transition: all 1s linear;
    }
    `
  ],
  animations: [
    trigger('counter', [
      state('void', style({
        transform: 'scale(1.5, 1.5)',
        opacity: 0
      })),
      state('in', style({
        transform: 'scale(0.8, 0.8)',
        opacity: 1
      })),
      transition('void => *', animate('1s ease-out')),
      transition('* => void', animate('10ms ease-in'))
  ])
  ]
})
export class TmpoCountDownComponent implements OnInit, OnDestroy {

  @Input()
  counter: number = 3;
  @Input()
  delay: number = 1200;

  current: number;

  switch$: Observable<boolean>;

  @Output()
  done = new EventEmitter<boolean>();

  subs: Subscription;

  ngOnInit() {

    this.current = this.counter;

    this.subs = Observable
      .interval(this.delay)
      .take(this.counter + 1)
      .subscribe(num => {
        if (num === this.counter) {
          this.done.next(true);
        }
        this.switch$ = getSwitcher(100);
        this.current = this.counter - num;
      });
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
