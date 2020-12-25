import { Component, OnInit } from '@angular/core';
import { Randomizer } from 'src/model/randomizer';
import { Entrant } from 'src/model/types/entrant';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent{
  entrants: Entrant[] = [];
  showAddNames = true;

  toggleAddNames(): void {
    this.showAddNames = !this.showAddNames;
    this.entrants.push(new Entrant(''));
  }

  addName(): void {
    this.entrants.push(new Entrant(''));
  }

  drawNames(): void {
    let randomizer = new Randomizer();
    let map = randomizer.drawNames(this.entrants);

    console.log(map);
  }

}
