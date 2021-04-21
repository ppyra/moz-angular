import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselClientDataComponent } from './carousel-client-data.component';

describe('CarouselClientDataComponent', () => {
  let component: CarouselClientDataComponent;
  let fixture: ComponentFixture<CarouselClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselClientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
