import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-liste-mots',
  templateUrl: './liste-mots.component.html',
  styleUrls: ['./liste-mots.component.scss']
})
export class ListeMotsComponent implements OnInit {


  motTrouve = 'Pas trouvé';
  test = 'test';

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() maListeDeMotsATrouver: Array<object>;
  @Input() data: Array<object>;

  constructor() {
  }

  ngOnInit() {
  }

  getStatus() {
    // console.log('methode getStatus');
    // return this.motTrouve;
  }

  motValideOuPas() {
  }

  getColor() {
  }
}
