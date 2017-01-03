import { NgModule, Component, HostListener } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



import { RecordButtonModule } from '../../recordbtn/recordbtn';


@Component({
  templateUrl: './components.html',
  styleUrls: [
    './components.scss'
  ]
})
export class ComponentsDemoComponent {}


const ROUTES = [{
  path: '', component: ComponentsDemoComponent
}];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    RecordButtonModule,
  ],
  declarations: [
    ComponentsDemoComponent,

  ],
})
export class DemoComponentsModule { }
