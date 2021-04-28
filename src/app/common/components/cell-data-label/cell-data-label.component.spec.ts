import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDataLabelComponent } from './cell-data-label.component';

describe('CellDataLabelComponent', () => {
  let component: CellDataLabelComponent;
  let fixture: ComponentFixture<CellDataLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellDataLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDataLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
