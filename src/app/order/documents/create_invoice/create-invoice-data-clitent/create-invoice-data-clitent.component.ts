import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'create-invoice-data-clitent',
  templateUrl: './create-invoice-data-clitent.component.html',
  styleUrls: ['./create-invoice-data-clitent.component.scss']
})
export class CreateInvoiceDataClitentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  exhibitions() {
    this.router.navigate([{outlets: {canvasOutlet: ['order-details']}}], { relativeTo: this.route.parent })
  }
  searchCustomer(){

  }
}
