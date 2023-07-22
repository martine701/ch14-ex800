import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'thisname',
  template: `
    <p *ngFor="let change of changes">
      {{change}}
    </p>
  `,
  styles: []
})
export class NameComponent implements OnChanges {
  @Input('anothername') nm: any;
  changes: Array<string> = [''];

  ngOnChanges(changes: SimpleChanges): void {
    this.changes.push(JSON.stringify(changes));
  }
}

@Component({
  selector: 'app-root',
  template: `
  Change this field:<input [(ngModel)]="myname"/>
  <hr/>
  History
  <thisname [anothername]="myname"></thisname>
  `,
  styles: []
})
export class AppComponent {
  myname: string = '';
}

