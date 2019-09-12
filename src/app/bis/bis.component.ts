import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bis',
  template: '<div>\n' +
    '    <code>promise|async</code>: \n' +
    '    <button (click)="clicked()">{{ arrived ? \'Reset\' : \'Resolve\' }}</button>\n' +
    '    <span>Wait for it... {{ greeting | async }}</span>\n' +
    '  </div>',
  styleUrls: ['./bis.component.css']
})
// export class BisComponent implements OnInit {

//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

// }

export  class BisComponent {
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor() { this.reset(); }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
}
