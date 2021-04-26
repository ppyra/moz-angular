import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.scss']
})
export class NumberSpinnerComponent implements OnInit {

  value: number;
  constructor() { }

  ngOnInit(): void {
    this.value = 1;
  }
  clickPlus() {
    this.value++;
  }
  clickMinus() {
    this.value >0 ? this.value-- : this.value;
  }

}
