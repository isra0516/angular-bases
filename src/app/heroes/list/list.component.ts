import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroe_borrado: string = '';
  public deletedHero?: string;

  public heroeNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ]

  removeLastHeroe():void {
    this.deletedHero = this.heroeNames.pop();
  }

}
