import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characters: Characters[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
