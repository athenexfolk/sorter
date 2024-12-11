import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortVisualizerControllerComponent } from './sort-visualizer-controller.component';

describe('SortVisualizerControllerComponent', () => {
  let component: SortVisualizerControllerComponent;
  let fixture: ComponentFixture<SortVisualizerControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortVisualizerControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortVisualizerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
