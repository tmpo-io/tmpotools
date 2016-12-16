import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainModule } from '../main/main.module';
import { MainComponent } from '../main/main.component';



const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'staggered',
    loadChildren: 'app/demo/staggered/staggered.module#DemoStaggeredModule' }
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
