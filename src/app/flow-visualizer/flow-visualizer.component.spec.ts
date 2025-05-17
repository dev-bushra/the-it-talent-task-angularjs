import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowVisualizerComponent } from './flow-visualizer.component';

describe('FlowVisualizerComponent', () => {
  let component: FlowVisualizerComponent;
  let fixture: ComponentFixture<FlowVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowVisualizerComponent]
    });
    fixture = TestBed.createComponent(FlowVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
