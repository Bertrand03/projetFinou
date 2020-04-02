import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableauDeMots: Array<{ id: number, motAnglais: string, motFrancais: string }>;

  constructor() {

    this.tableauDeMots = [];

    this.tableauDeMots = [
      {id: 0, motAnglais: 'Hello', motFrancais: 'Bonjour'},
      {id: 1, motAnglais: 'Good bye', motFrancais: 'Au revoir'},
      {id: 2, motAnglais: 'Church', motFrancais: 'Eglise'}
    ];
    console.log(this.tableauDeMots[1]);

  }
}


