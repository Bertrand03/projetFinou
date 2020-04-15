import {Component, Input, OnInit} from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.scss']
})
export class AideComponent implements OnInit {

  @Input () id: number;
  @Input () motAnglais: string;
  @Input () motFrancais: string;
  @Input () motTrouve: string;

  maLettre: string;
  monMotAide = ' ';
  indice = 0;
  longueurDuMot = 0;
  penaliteAide = 0;

  constructor(private listeMotsService: ListeMotsService) { }

  ngOnInit() {
  }

  onAfficheUneLettre(motAnglais: string) {
    this.longueurDuMot = this.motAnglais.length
    if (this.indice < this.longueurDuMot) {
      console.log(this.motAnglais);
      console.log(this.longueurDuMot);
      console.log(this.motAnglais[this.indice]);
      this.monMotAide = this.monMotAide + this.motAnglais[this.indice];
      this.indice++;
    }
  }

  onCalculPenalite() {
    if (this.penaliteAide < 1) {
      this.penaliteAide++;
    }
  }
}
