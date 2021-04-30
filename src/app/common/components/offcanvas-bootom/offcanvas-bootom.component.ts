import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offcanvas-bootom',
  templateUrl: './offcanvas-bootom.component.html',
  styleUrls: ['./offcanvas-bootom.component.scss']
})
export class OffcanvasBootomComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.body.addEventListener('click', function(e){
      e.stopPropagation()
    })
  }
}


