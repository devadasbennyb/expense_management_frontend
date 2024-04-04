import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedVerticalBarAndLineComboChartComponent } from './grouped-vertical-bar-and-line-combo-chart.component';

describe('GroupedVerticalBarAndLineComboChartComponent', () => {
  let component: GroupedVerticalBarAndLineComboChartComponent;
  let fixture: ComponentFixture<GroupedVerticalBarAndLineComboChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedVerticalBarAndLineComboChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedVerticalBarAndLineComboChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
