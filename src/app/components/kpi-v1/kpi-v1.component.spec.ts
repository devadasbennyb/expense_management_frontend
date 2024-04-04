import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiV1Component } from './kpi-v1.component';

describe('KpiV1Component', () => {
  let component: KpiV1Component;
  let fixture: ComponentFixture<KpiV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
