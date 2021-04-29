import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/common/services/notifier.service';
@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  issueAnInvoice() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['create-invoice']}}]);
  }

  showNotifier() {
    this.notifierService.error("some alert", 'title', true);
    this.notifierService.info("some alert", 'title', true);
    this.notifierService.success("some alert", 'title', true);
    this.notifierService.warning("some alert", 'title', true);
  }

  addWarranty() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['insurance']}}]);
  }

  showDocuments() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['documents']}}]);
  }
}
