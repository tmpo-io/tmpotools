import {
  Component, OnInit,
  Output, Input, OnDestroy, NgModule, EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';


const letters = `__^!./mm-099009235q93852345zxcv,mnasddfjh./,-*kzxcbm,qworhsdjfgslkdfg`;

const matrixEffect = (txt) => x => x.map(i => {
  let offset = txt.length - i;
  let r = Math.round(Math.random() * (letters.length - offset));
  let res = txt.substring(0, i) + letters.substring(r, r + offset);
  return res;
});

const normalEffect = (txt) => x => x.map(i => {
  return txt.substring(0, i);
});

const effect = (matrix: boolean) => (matrix ? matrixEffect : normalEffect);


@Component({
  selector: 'tmpo-writer',
  template: '{{ txt$ | async }}'
})
export class TmpoWriterComponent implements OnInit, OnDestroy {

  txt$: Observable<string>;
  destroy$ = new Subject<boolean>();

  @Input()
  text: string;
  @Input()
  speed: number = 50; // milliseconds
  @Input()
  delay: number = 0;
  @Input()
  matrix: boolean = false;

  @Output()
  complete = new EventEmitter<boolean>();

  ngOnInit() {

    this.txt$ = Observable.interval(this.speed)
      .delay(this.delay)
      .takeUntil(this.destroy$)
      .do(x => (x === this.text.length) ? this.complete.next(true) : '')
      .let(effect(this.matrix)(this.text))
      .take(this.text.length + 1);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}


@NgModule({
  imports: [CommonModule],
  declarations: [TmpoWriterComponent],
  exports: [TmpoWriterComponent]
})
export class TmpoWriterModule { }
