import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainModule } from '../main/main.module';
import { MainComponent } from '../main/main.component';



const ROUTES: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'staggered',
    loadChildren: 'app/demo/staggered/staggered.module#DemoStaggeredModule' },
  {
    path: 'sortable',
    loadChildren: 'app/demo/sortable/sortabled.module#DemoSortableModule'
  },
  {
    path: 'tween',
    loadChildren: 'app/demo/tweend/tweend.module#DemoTweenModule'
  },
  {
    path: 'spritesheet',
    loadChildren: 'app/demo/sprited/sprited.module#DemoSpritedModule'
  },
  {
    path: 'writer',
    loadChildren: 'app/demo/writed/writed.module#DemoWritedModule'
  },
  {
    path: 'backdrop',
    loadChildren: 'app/demo/backdrop/backdroped.module#DemoBackdropedModule'
  },
  {
    path: 'experiment',
    loadChildren: 'app/demo/experiment/experiment.module#ExperimentModule'
  },
  {
    path: 'experiment2',
    loadChildren: 'app/demo/experiment2/experiment.module#Experiment2Module'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    MainModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
