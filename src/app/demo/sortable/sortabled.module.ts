

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { TmpoSortableModule } from '../../sortable/sortable';
import { SortResult, applySort } from '../../sortable/sortable';





@Component({
  styles: [``],
  template: `
    test
    <ul>
      <li *ngFor="let item of items; let i = index"
        [tmpoSortable]="i" (sorted)="sorted($event)">{{ item }}</li>
    </ul>
  `
})
export class SortableDemoComponent {

  items: string[] = [
    'Item 1', 'item 2', 'item 3', 'item 4',
    'item 5', 'item 6', 'item 7',
    'item 8', 'item 9', 'item 10'
  ];

  sorted(event: SortResult) {
    this.items = applySort(this.items, event);
  }

}


const ROUTES = [{
  path: '', component: SortableDemoComponent
}];


@NgModule({
  imports: [
    CommonModule,
    TmpoSortableModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SortableDemoComponent
  ],
})
export class DemoSortableModule { }
