import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cell-data-label',
  templateUrl: './cell-data-label.component.html',
  styleUrls: ['./cell-data-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellDataLabelComponent implements OnInit {

  @Input() value: any;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
