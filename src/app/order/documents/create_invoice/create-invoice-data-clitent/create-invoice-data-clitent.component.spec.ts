import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoiceDataClitentComponent } from './create-invoice-data-clitent.component';

describe('CreateInvoiceDataClitentComponent', () => {
  let component: CreateInvoiceDataClitentComponent;
  let fixture: ComponentFixture<CreateInvoiceDataClitentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvoiceDataClitentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvoiceDataClitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
