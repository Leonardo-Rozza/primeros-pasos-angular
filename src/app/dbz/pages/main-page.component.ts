import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Characters } from '../interfaces/characters.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  public get characters(): Characters[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Characters) {
    this.dbzService.onNewCharacter(character);
  }
}
