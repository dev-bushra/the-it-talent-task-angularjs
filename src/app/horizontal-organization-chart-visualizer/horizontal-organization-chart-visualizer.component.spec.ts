import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalOrganizationChartVisualizerComponent } from './horizontal-organization-chart-visualizer.component';

describe('HorizontalOrganizationChartVisualizerComponent', () => {
  let component: HorizontalOrganizationChartVisualizerComponent;
  let fixture: ComponentFixture<HorizontalOrganizationChartVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalOrganizationChartVisualizerComponent]
    });
    fixture = TestBed.createComponent(HorizontalOrganizationChartVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
