import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo-description',
  templateUrl: './photo-description.component.html',
  styleUrls: ['./photo-description.component.scss']
})
export class PhotoDescriptionComponent implements OnInit {

  @Input() imgWidth: number;
  constructor() { }

  ngOnInit() {
    //this.imgWidth = 100;
  }

}
