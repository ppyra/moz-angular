import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoiceProductsComponent } from './create-invoice-products.component';

describe('CreateInvoiceProductsComponent', () => {
  let component: CreateInvoiceProductsComponent;
  let fixture: ComponentFixture<CreateInvoiceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvoiceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoiceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
