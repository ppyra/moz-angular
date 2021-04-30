import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'order-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  openInvoice() {
    this.router.navigate([{outlets: {canvasOutlet: ['invoice']}}], { relativeTo: this.route.parent })
  }
  close() {
    this.router.navigate(['/']);
  }
}
