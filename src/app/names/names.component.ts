import { Component, OnInit } from '@angular/core';
import { Entrant } from '../../types/entrant';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent{
  entrants: Entrant[] = [];
  showAddNames: Boolean = true;

  toggleAddNames(): void {
    this.showAddNames = !this.showAddNames;
    this.entrants.push(new Entrant(""));
  }

  addName(): void {
    this.entrants.push(new Entrant(""));
  }

  drawNames(): void {
    console.log(this.entrants);
  }

}
