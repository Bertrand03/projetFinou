import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() monOutput = new EventEmitter<number>();


  maListeDeMots = [];
  scoreJoueurBis = 0;

  constructor(private listeMotsService: ListeMotsService) {
  }

  ngOnInit() {
    this.maListeDeMots = this.listeMotsService.maListeDeMotsATrouver;
    this.scoreJoueurBis = this.listeMotsService.scoreGlobal;
  }
}

