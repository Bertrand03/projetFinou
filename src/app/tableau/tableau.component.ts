import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  @Input() id: number;
  @Input() motFrancais: string;
  @Input() motAnglais: string;

  @Input() data: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
