import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { CanvasComponentsService } from './component.model.service';
import { ComponentModel } from './component.model';
import { ComponentModelService } from './component.model.service';

@Component({
  selector: 'offcanvas-bootom',
  templateUrl: './offcanvas-bootom.component.html',
  styleUrls: ['./offcanvas-bootom.component.scss']
})
export class OffcanvasBootomComponent implements OnInit {

  modelComponent: ComponentModel;
  isOpen = false;
  activeComponent = 'documents';
  constructor(private route: ActivatedRoute, private router: Router, private componentModelService: ComponentModelService) {

  }

  ngOnInit(): void {
    document.body.addEventListener('click', function(e){
      e.stopPropagation()
    })

    this.componentModelService.getComponentDesc().subscribe((model: ComponentModel) => {
      this.modelComponent = model;
    })

  }
  openCanvas() {
    //this.router.navigate(['canvas'], { relativeTo: this.route })
  }
  gotodoc() {
    //this.router.navigate(['canvas/documents'], {relativeTo: this.route});
    this.router.navigate(['canvas', {outlets: {innerOutlet: ['invoice']}}], { relativeTo: this.route })
  }
}


