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
  motTrouve: string;

  maListeDeMotsATrouver: Array<{ id: number, motFrancais: string, motAnglais: string, motTrouve: string }> = [
    {id: 0, motFrancais: 'Cascade', motAnglais: 'Waterfall', motTrouve: 'non'},
    {id: 1, motFrancais: 'Culture de bananes', motAnglais: 'Banana growing', motTrouve: 'non'},
    {id: 2, motFrancais: 'Canne a sucre', motAnglais: 'Sugar cane', motTrouve: 'non'},
    {id: 3, motFrancais: 'Lezard', motAnglais: 'Lizard', motTrouve: 'non'},
    {id: 4, motFrancais: 'Profiter de l\'occasion', motAnglais: 'Take opportunity for', motTrouve: 'non'},
    {id: 5, motFrancais: 'Palmier', motAnglais: 'Palm tree', motTrouve: 'non'},
    {id: 6, motFrancais: 'Arc en ciel', motAnglais: 'Rainbow', motTrouve: 'non'},
    {id: 7, motFrancais: 'Coucher de soleil', motAnglais: 'Sunset', motTrouve: 'non'},
    {id: 8, motFrancais: 'Sable', motAnglais: 'Sand', motTrouve: 'non'},
    {id: 9, motFrancais: 'Phare', motAnglais: 'Lighthouse', motTrouve: 'non'},
    {id: 10, motFrancais: 'Lever de soleil', motAnglais: 'Sunrise', motTrouve: 'non'},
    {id: 11, motFrancais: 'Decollage', motAnglais: 'To take off', motTrouve: 'non'},
    {id: 12, motFrancais: 'Atterir', motAnglais: 'To land', motTrouve: 'non'},
    {id: 13, motFrancais: 'Maillot de bain', motAnglais: 'Swimsuit', motTrouve: 'non'},
    {id: 14, motFrancais: 'Coup de soleil', motAnglais: 'Sunburn', motTrouve: 'non'}
  ];

  constructor() {
  }
}

