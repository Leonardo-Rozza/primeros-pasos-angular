import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene una edad de ${this.age}`;
  }

  changeAge(): void {
    this.age = 24;
  }

  changeName(): void {
    this.name = 'Hulk';
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
