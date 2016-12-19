import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class AppNavMenuComponent {
  public opened: boolean;

  open() {
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

}



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppNavMenuComponent
  ],
  exports: [
    AppNavMenuComponent
  ]
})
export class NavModule {}
