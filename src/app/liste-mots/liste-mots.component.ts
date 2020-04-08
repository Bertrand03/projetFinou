import {Component, Input, OnInit, Output} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-liste-mots',
  templateUrl: './liste-mots.component.html',
  styleUrls: ['./liste-mots.component.scss']
})
export class ListeMotsComponent implements OnInit {

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;
  @Input() motTrouve: string;
  @Input() indexOfArray: number;

  maListeDeMots = [];
  motStatus: string;
  constructor(private listeMotsService: ListeMotsService) {
  }

  onGreenOrRed() {
    console.log('entre dans onGreenOrRed, motTrouve vaut : ');
    console.log(this.motTrouve);
    if (this.motTrouve === 'oui'){
      return 'green';
    } else if (this.motTrouve === 'non'){
      return 'red';
    }
  }

  switchAll() {
    this.listeMotsService.switchOnAll();
  }


  getStatus() {
    if (this.motTrouve === 'oui') {
      this.motStatus = 'Trouvé!';
    } else if (this.motTrouve === 'non') {
      this.motStatus = 'Non trouvé';
    }
    return this.motStatus;
  }

  getColor() {
    console.log('entre dans getColor(), motTrouve vaut : ');
    console.log(this.motTrouve);
    if (this.motTrouve === 'oui'){
      return 'green';
    } else if (this.motTrouve === 'non'){
      return 'red';
    }
  }

  ngOnInit() {
    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
  }
}
