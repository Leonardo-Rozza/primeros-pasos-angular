import { Component, EventEmitter, Output, output } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css',
})
export class AddCharactersComponent {
  public character: Characters = {
    name: '',
    power: 0,
  };

  @Output()
  public onNewCharacter: EventEmitter<Characters> = new EventEmitter();

  emitCharacter() {
    if (this.character.name.length === 0) return;
    if (this.character.power <= 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character = {
      name: '',
      power: 0,
    };
  }
}
