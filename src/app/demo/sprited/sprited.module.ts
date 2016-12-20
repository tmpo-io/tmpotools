import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TmpoSpriteModule } from '../../sprite/spritesheet';

@Component({
  styles: [],
  template: `
    <div class="content">
    <h2>Spritesheet</h2>
    <hr>
    <tmpo-sprite
      sprite="/assets/img/walker.png"
      width="184"
      height="325"
      [steps]="[
        [1, 100],
        [2, 100],
        [3, 100],
        [4, 100],
        [5, 100],
        [6, 100],
        [7, 100]
        ]"
      ></tmpo-sprite>
  </div>
  `,
})
export class SpritedDemoComponent {

}

const ROUTES: Routes = [{
  path: '', component: SpritedDemoComponent
}];


@NgModule({
  imports: [
    TmpoSpriteModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    SpritedDemoComponent
  ]
})
export class DemoSpritedModule { }
