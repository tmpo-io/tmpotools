
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-example1',
  template: `
  <svg width="100" height="100">
    <circle r="20%" cx="50%" cy="50%"
      fill="#ccc"
    [tmpoWebAnimate]="[
      {r:'20%', fill: '#375D81'},
      {r:'50%', fill: '#ABC8E2'}
      ]"
    [animProps]="{
      delay: delay*100,
      duration: 1000,
      direction: 'alternate',
      easing: 'cubic-bezier(.39,.52,.44,-0.99)'
    }"
    />

    <circle r="21%" cx="50%" cy="50%" stroke-width="2px"
      stroke="#183152" fill="none"
      [tmpoWebAnimate]="[{r:'10%'}, {r:'40%'}]"
      [animProps]="{duration: 800, delay: 200, direction:'alternate'}"
    />

    <circle r="21%" cx="50%" cy="50%" stroke-width="2px"
      stroke="#C4D7ED" fill="none"
      [tmpoWebAnimate]="[{r:'10%'}, {r:'40%'}]"
      [animProps]="{duration: 800, delay: 300, direction:'alternate'}"
    />
  </svg>

  <svg viewBox="0 0 500 200" width=100 height=100
    [tmpoWebAnimate]="[{transform: 'rotate(-5deg)'}, {transform: 'rotate(5deg)'}]"
    [animProps]="{duration: 500, direction:'alternate', easing:'ease-in-out', delay: delay*300}"
    >
    <path      style="fill:#ffcc00;stroke:none"
     d="M 147.02822,40.028819 C 197.9892,75.479941 260.27977,127.50446 295.00217,145.88488 l 0,0 104.07857,-16.23366 -0.84196,42.28531 -103.16275,1.17186 c -29.03545,27.7405 -88.86907,70.94655 -160.48032,44.65364 l 0,0 C 33.107026,180.49404 22.653865,90.423572 22.653865,90.423572 l 0,0 0.97983,-49.326293 c 0,0 27.469692,-20.148051 64.481654,-20.148051 l 0,0 c 18.060381,0 38.390611,4.79575 58.912871,19.079591" />
  <path
     style="fill:url(#linearGradient31343-9);stroke:none"
     d="m 37.863386,34.327099 c 11.162181,0.30035 -2.40773,40.320732 -13.195701,34.535302 l 0,0 C 13.879715,63.081901 -0.47306578,41.072659 -0.47306578,41.072659 l 0,0 c 0,0 26.11566078,-6.75048 37.65697178,-6.75048 l 0,0 c 0.23634,0 0.45791,0 0.67948,0.005" />
  <path
     d="m 102.10574,56.65441 c -2.550511,7.548131 -10.723971,11.580701 -18.267182,9.030191 -7.53828,-2.56036 -11.59547,-10.738741 -9.02034,-18.281951 2.54559,-7.548131 10.72889,-11.575771 18.281951,-9.025261 7.523521,2.56528 11.565931,10.738731 9.005571,18.277021"
     style="fill:#1a171b;fill-opacity:1;fill-rule:nonzero;stroke:none"
     />
  <path
     d="m 89.945019,52.5411 c -1.11277,3.26938 -4.677581,5.02717 -7.942041,3.91439 -3.28415,-1.11277 -5.04193,-4.66773 -3.94393,-7.94203 1.12754,-3.284151 4.69235,-5.037011 7.96173,-3.924241 3.279231,1.107841 5.037011,4.667731 3.924241,7.951881"
     style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
     id="path31365"
     inkscape:connector-curvature="0" />
  <path
     style="fill:#ffff00;stroke:none;"  [tmpoWebAnimate]="[
       {transform: 'translate(0, 0) rotate(0)'},
       {transform: 'translate(50%, -50%) rotate(35deg)', offset: 0.1},
       {transform: 'translate(50%, -50%) rotate(35deg)', offset: 0.15},
       {transform: 'translate(0, 0) rotate(0)', offset:0.2},
       {transform: 'translate(0, 0) rotate(0)', offset:1}
       ]"
       [animProps]="{duration: 800, delay: (delay*100)+ 800, direction:'alternate'}"
     d="m 308.37512,23.022971 c 18.45428,14.372775 4.92377,60.566427 -6.78003,65.110971 l 0,0 c 0,0 45.9289,20.413908 25.96795,55.369408 l 0,0 c -19.96095,34.95551 -122.47377,44.60581 -185.7294,-40.4856 l 0,0 c 0,0 71.75897,-91.497559 132.93185,-91.511255 l 0,0 c 11.79735,0 23.19094,3.39928 33.60963,11.516476" />
  </svg>

  `
})
export class AppExample1Component {
  @Input()
  delay: number = 1;
}
