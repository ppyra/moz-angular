import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddressCardComponent } from './client-address-card.component';

describe('ClientAddressCardComponent', () => {
  let component: ClientAddressCardComponent;
  let fixture: ComponentFixture<ClientAddressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
