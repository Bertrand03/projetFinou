import { Component, OnInit } from '@angular/core';
import {ListeMotsService} from '../services/liste-mots.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  tableauMotsNonTrouves = [];

  constructor(private listeMotsService: ListeMotsService) { }

  ngOnInit() {
    this.tableauMotsNonTrouves = this.listeMotsService.motsNonTrouves;
  }

  penalitesTotal() {
    return this.listeMotsService.penalite;
  }

  premierCoupTotal() {
    return this.listeMotsService.premierCoup;
  }
}
