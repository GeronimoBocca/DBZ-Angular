import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public title: string = 'Hero Component';
  public name: string = 'ironman';
  public age: number = 45;
  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): string {
    return this.name = 'spiderman';
  }

  changeAge(): number {
    return this.age = 30;
  }

  resetForm():void {
    this.name = "ironman";
    this.age = 45;
  }
}
