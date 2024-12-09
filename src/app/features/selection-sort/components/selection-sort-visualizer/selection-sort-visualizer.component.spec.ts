import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSortVisualizerComponent } from './selection-sort-visualizer.component';

describe('SelectionSortVisualizerComponent', () => {
  let component: SelectionSortVisualizerComponent;
  let fixture: ComponentFixture<SelectionSortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionSortVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionSortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
