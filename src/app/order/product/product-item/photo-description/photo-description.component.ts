import { Component, Input, OnInit } from '@angular/core';
import { ImageDescriptionProduct } from '../product-item.model';

@Component({
  selector: 'photo-description',
  templateUrl: './photo-description.component.html',
  styleUrls: ['./photo-description.component.scss']
})
export class PhotoDescriptionComponent implements OnInit {

  @Input() imgWidth: number;
  @Input() imageDescriptionProduct: ImageDescriptionProduct;
  constructor() { }

  ngOnInit() {
    //this.imgWidth = 100;
  }

}
