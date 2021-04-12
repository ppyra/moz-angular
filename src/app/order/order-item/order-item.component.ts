import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/common/services/notifier.service';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService) { }

  ngOnInit(): void {
  }

  showNotifier() {
    this.notifierService.success("some alert", 'title', true);
  }

}
