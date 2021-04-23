import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.scss']
})
export class NumberSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).on('click', '.number-spinner button', function () {
    //   var btn = $(this),
    //     oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    //     newVal = 0;

    //   if (btn.attr('data-dir') == 'up') {
    //     newVal = parseInt(oldValue) + 1;
    //   } else {
    //     if (oldValue > 1) {
    //       newVal = parseInt(oldValue) - 1;
    //     } else {
    //       newVal = 1;
    //     }
    //   }
    //   btn.closest('.number-spinner').find('input').val(newVal);
    // });
  }

}
