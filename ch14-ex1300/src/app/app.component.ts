import { Component, Input, DoCheck, IterableDiffers, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'myNumbers',
  template: `
    {{numbersArray}}
    <br/>
    <p *ngFor="let change of changes">{{change}}</p>
  `,
  styles: ['p{padding:0;margin:0}']
})
export class NumbersComponent implements DoCheck {
  @Input('nnumbers') numbersArray: Array<string> = [];
  changes: Array<string> = [];
  differ;
  constructor(private differs: IterableDiffers) {
    this.differ = differs.find([]).create(undefined);
  }
  ngDoCheck(): void {
    const differences = this.differ.diff(this.numbersArray);
    if (differences) {
      if (differences.forEachAddedItem) {
        differences.forEachAddedItem((item) => {
          if ((item) && (item.item)) {
            this.changes.push('added' + item.item);
          }
        });
      }
      if (differences.forEachRemovedItem) {
        differences.forEachRemovedItem((item) => {
          if ((item) && (item.item)) {
            this.changes.push('removed' + item.item);
          }
        });
      }
    }
  }
}

@Component
  ({
    selector: 'app-root',
    template: `
    Enter Array(comma-separated):<input [(ngModel)]="localnumbers" (ngModelChange)="modelChangeFn($event)"/>
    <br/>
    <myNumbers [nnumbers]="localnumbers.split(',')"></myNumbers>
    `
  })
export class AppComponent {

  localnumbers = '';
  modelChangeFn(localnumbers: any) {

  }
}
