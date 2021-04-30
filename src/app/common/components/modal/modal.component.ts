import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  close() {
    this.router.navigate(['/']);
  }
}
