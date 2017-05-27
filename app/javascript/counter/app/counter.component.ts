import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  // これでテンプレートを指定するのか。VueとかReactみたいにtemplateとか使えないのかな？
  template: `
  <div>
    <button type="button" (click)="increment($event)">{{counterValue}}</button>
    <button type="button" (click)="decrement($event)">-</button>
    <button (click)="increment($event)">+</button>
    <button (click)="clear($event)">clear</button>
  </div>
  `
})

export class CounterComponent {
  counterValue = 10;

  public increment(event) {
    this.counterValue++;
  }

  public decrement(event) {
    this.counterValue--;
  }

  public clear(event) {
    this.counterValue = 0;
  }
}
