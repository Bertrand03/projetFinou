import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-item-tableau]',
  templateUrl: './item-tableau.component.html',
  styleUrls: ['./item-tableau.component.scss']
})
export class ItemTableauComponent implements OnInit {

  @Input() id: number;
  @Input() motAnglais: string;
  @Input() motFrancais: string;
  constructor() { }

  ngOnInit() {
    // console.log(this.motFrancais);

  }

}
