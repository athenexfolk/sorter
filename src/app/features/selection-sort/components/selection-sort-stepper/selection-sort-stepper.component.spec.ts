import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSortStepperComponent } from './selection-sort-stepper.component';

describe('SelectionSortStepperComponent', () => {
  let component: SelectionSortStepperComponent;
  let fixture: ComponentFixture<SelectionSortStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionSortStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionSortStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
