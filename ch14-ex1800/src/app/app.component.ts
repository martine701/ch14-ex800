import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{count}}</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  interval: any;
  count = 0;
  ngOnInit(): void {
    this.interval = setInterval(() => { this.count++; })
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
    delete this.interval;
  }
}
