import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'row-data-label',
  templateUrl: './row-data-label.component.html',
  styleUrls: ['./row-data-label.component.scss']
})
export class RowDataLabelComponent implements OnInit {

  @Input() value: any;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
