import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Green Arrow',
    'Spiderman',
    'Ironman',
    'Hulk',
    'Batman',
  ];

  public lastHeroDeleted?: string;

  deleteLastHero(): void {
    this.lastHeroDeleted = this.heroNames.pop();
  }
}
