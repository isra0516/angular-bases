import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  // public onDeletedId: EventEmitter<number> = new EventEmitter();
  public onDeletedById: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void {
  //   console.log({index});
  //   this.onDeletedId.emit(index);
  // }

  onDeleteCharacterById({id}: Character): void {
    if(!id) return;

    this.onDeletedById.emit(id);
  }

}
