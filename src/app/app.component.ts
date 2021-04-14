import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
declare var $: any;
declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moz';

  constructor() {

  }
  ngOnInit(): void {
    $(document).ready(function() {
      // executes when HTML-Document is loaded and DOM is ready
     console.log("document is ready");


         $('[data-toggle="offcanvas"], #offcanvasBottom').on('click', function () {
          console.log("clickeddd");
         $('.offcanvas-bottom').toggleClass('open');

        //  const offcanvasToggle = document.querySelector(
        //   '[data-bs-toggle="offcanvas"]',
        // );
        // const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
        // offcanvasToggle.addEventListener("click", function () {
        //   offcanvasCollapse.classList.toggle("open");
        // });
       })


     // document ready
     });
     window.onload = function() {
      // executes when complete page is fully loaded, including all frames, objects and images
     console.log("window is loaded");


     // window load
     };
  }
}
