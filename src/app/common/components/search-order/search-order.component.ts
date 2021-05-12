import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.scss'],
})
export class SearchOrderComponent implements OnInit  {
  
  public order: FormGroup;
  dateModel: Date = new Date();

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.order =  new FormGroup({
      'orderNr': new FormControl(null, [Validators.required]),
      'receiptNr': new FormControl(null, [Validators.required]),
      'createDate': new FormControl(null, [Validators.required]),
      'clientsPhone': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'fiscalizationDate': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
      'orderGrossValue': new FormControl(null, [Validators.required]),
      'salesMagazine': new FormControl(null, [Validators.required]),
    });
  }

  // writeValue(value: string): void {
  //   this.value = value ? value : ''
  // }
  // registerOnChange(fn: any): void {
  // }
  // registerOnTouched(fn: any): void {
  // }
  // setDisabledState?(isDisabled: boolean): void {
  // }

  onSubmit(order: FormGroup) { console.log(order); } 

  close() {
    this.router.navigate(['/']);
  }
}
