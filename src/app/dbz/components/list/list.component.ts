import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  @Input()
  public characterList: Character[] = [{
    name: '',
    power: 0
  }];

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id)
  }
}
