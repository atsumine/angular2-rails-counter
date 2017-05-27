import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  // これでテンプレートを指定するのか。VueとかReactみたいにtemplateとか使えないのかな？
  template: `
  <div>
    <button type="button" (click)="increment($event)">{{counterValue}}</button>
  </div>
  `
})

export class CounterComponent {
  counterValue = 10;

  public increment(event) {
    this.counterValue++;
  }
}
