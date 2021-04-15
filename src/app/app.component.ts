import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;
declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moz';

  constructor() {

  }
  ngOnInit(): void {
   
  }
}
