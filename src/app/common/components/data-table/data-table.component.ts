import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showDetails() {
    $('#customTable').DataTable( {
      "columnDefs": [
          {
              "targets": [ 2 ],
              "visible": false,
              "searchable": false
          },
          {
              "targets": [ 3 ],
              "visible": false
          }
      ]
  } );
  }
}
