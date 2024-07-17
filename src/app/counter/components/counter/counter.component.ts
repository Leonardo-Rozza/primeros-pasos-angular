import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increment()">+1</button>
    <button (click)="decrement()">-1</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter !== 0) this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
