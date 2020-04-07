import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id: number;
  motFrancais: string;
  motAnglais: string;

  maListeDeMotsATrouver: Array<{ id: number, motFrancais: string, motAnglais: string }> = [
    {id: 0, motFrancais: 'Bonjour', motAnglais: 'Hello'},
    {id: 1, motFrancais: 'Au revoir', motAnglais: 'Good bye'},
    {id: 0, motFrancais: 'Chien', motAnglais: 'Dog'}
  ];

  constructor() {
  }
}

