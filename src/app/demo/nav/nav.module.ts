import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TmpoStaggeredModule } from '../../staggered/staggered';

export const CIRCLE_IN = { cx: '50%', cy: '50%', r: '100%' };
export const CIRCLE_OUT = {
    cx: 'calc(100% - 35px)', cy: '40px', r: '1%'
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class AppNavMenuComponent {
  public opened: boolean;


  toProps: { [key: string]: string } = CIRCLE_IN;


  open() {
    if (this.opened) {
      this.toProps = CIRCLE_OUT;
      setTimeout(() => this.opened = false, 400);
    } else {
      this.toProps = CIRCLE_IN;
      this.opened = true;
    }
  }

}




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TmpoStaggeredModule
  ],
  declarations: [
    AppNavMenuComponent
  ],
  exports: [
    AppNavMenuComponent
  ]
})
export class NavModule { }
