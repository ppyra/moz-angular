import { Component, Input, OnInit } from '@angular/core';
import { inputCursor } from 'ngx-bootstrap-icons';

@Component({
  selector: 'client-address-card',
  templateUrl: './client-address-card.component.html',
  styleUrls: ['./client-address-card.component.scss']
})
export class ClientAddressCardComponent implements OnInit {

  @Input() name: string;
  @Input() street: string;
  @Input() cityCode: string;
  constructor() { }

  ngOnInit(): void {
  }

}
