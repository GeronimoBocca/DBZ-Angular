import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>{{ title }}</h1>
  <hr>
  <h3>Counter: {{ counter }}</h3>
  <button class="btn btn-dark" (click)="increaseBy(+1)"> +1 </button>
  <button class="btn btn-dark mx-1" (click)="increaseBy(-1)"> -1 </button>
  <button class="btn btn-outline-danger" (click)="resetCounter()" *ngIf="counter !== 10">Reset</button>`
})
export class CounterComponent {
  public title:   string = 'Counter Component';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}