import { Component, OnInit, Input} from '@angular/core';
import { Crib } from './../crib'; // crib interface

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {


  @Input() crib: Crib;
  // @Input('crib') crib: any;
  constructor() { }

  ngOnInit(): void {
  }

}
