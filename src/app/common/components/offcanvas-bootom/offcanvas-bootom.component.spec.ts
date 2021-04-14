import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasBootomComponent } from './offcanvas-bootom.component';

describe('OffcanvasBootomComponent', () => {
  let component: OffcanvasBootomComponent;
  let fixture: ComponentFixture<OffcanvasBootomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasBootomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasBootomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
