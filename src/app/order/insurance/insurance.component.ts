import { Component, OnInit } from '@angular/core';
import { ComponentModel } from 'src/app/common/components/offcanvas-bootom/component.model';
import { ComponentModelService } from 'src/app/common/components/offcanvas-bootom/component.model.service';

@Component({
  selector: 'insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(private componentModelService: ComponentModelService) { }

  ngOnInit(): void {
  }

  confirm(){
    console.log("potwierdzam dodanie ubezpieczenia dla wybranych produktów");
  }
}
