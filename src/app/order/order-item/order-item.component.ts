import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'src/app/common/services/notifier.service';
@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  constructor(protected notifierService: NotifierService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService) { }

  ngOnInit(): void {
  }

  issueAnInvoice() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['create-invoice']}}]);
  }

  showNotifier() {
    this.notifierService.warning(this.translate.instant('notification.login_with_valid_credentials'), this.translate.instant('notification.login'), true);
    this.notifierService.error(this.translate.instant('notification.login_session_expired'), this.translate.instant('notification.unauthorized'), true);
    this.notifierService.info(this.translate.instant('notification.password_expired_info'), this.translate.instant('notification.login'), true);
    this.notifierService.success(this.translate.instant('notification.server_down_message'), this.translate.instant('notification.server_down'), true);
  }

  addWarranty() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['insurance']}}]);
  }

  showDocuments() {
    this.router.navigate(['canvas', {outlets: {canvasOutlet: ['documents']}}]);
  }
}
