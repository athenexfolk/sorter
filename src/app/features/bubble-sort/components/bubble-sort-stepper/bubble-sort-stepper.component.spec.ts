import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortStepperComponent } from './bubble-sort-stepper.component';

describe('BubbleSortStepperComponent', () => {
  let component: BubbleSortStepperComponent;
  let fixture: ComponentFixture<BubbleSortStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleSortStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleSortStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
