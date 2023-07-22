import { Component, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="input"/>
    <br/>
    {{input}}
    <div #message></div>
  `,
  styles: []
})
export class AppComponent implements AfterViewChecked {
  input: string = '';
  @ViewChild('message') message: any;
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
    if (isNaN(parseInt(this.input))) {
      this.message.nativeElement.innerHTML = "Input not numeric.";
    }
    else {
      this.message.nativeElement.innerHTML = "Input is numeric.";
    }
  }
}
