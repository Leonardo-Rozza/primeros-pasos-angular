import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Characters[] = [
    {
      id: uuid(),
      name: 'Picoro',
      power: 8000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9999,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 9000,
    },
  ];

  onNewCharacter(character: Characters): void {
    const newCharacter = { ...character, id: uuid() };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  // onDelete(index: number) {
  //   this.characters.splice(index, 1);
  // }
}
