import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarsChartsComponent } from './progressbars-charts.component';

describe('ProgressbarsChartsComponent', () => {
  let component: ProgressbarsChartsComponent;
  let fixture: ComponentFixture<ProgressbarsChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressbarsChartsComponent]
    });
    fixture = TestBed.createComponent(ProgressbarsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
