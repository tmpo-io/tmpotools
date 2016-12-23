import { Injectable, NgModule } from '@angular/core';


export interface WSize {
  width: number;
  height: number;
  max: number;
  min: number;
}


@Injectable()
export class WindowService {

  getViewportSize(): WSize {
    let width, height, min, max;
    try {
      width = window.innerWidth;
      height = window.innerHeight;
      min = Math.min(width, height);
      max = Math.max(width, height);
    } catch (e) {
      console.log('no window exists');
    }

    return {
      width, height, min, max
    };
  }


}



@NgModule({
  providers: [WindowService],
})
export class TmpoBrowserModule {}
