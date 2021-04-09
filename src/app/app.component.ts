import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moz';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
    this.translate.get('Intro')
    .subscribe((result: string) => {
      let name = result;
      console.log(name);
  });
    let aaa = this.translate.instant('test.cannot-delete-test')
    console.log(aaa);
  }
}
