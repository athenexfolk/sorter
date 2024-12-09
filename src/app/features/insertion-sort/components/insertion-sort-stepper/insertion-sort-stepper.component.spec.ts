import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSortStepperComponent } from './insertion-sort-stepper.component';

describe('InsertionSortStepperComponent', () => {
  let component: InsertionSortStepperComponent;
  let fixture: ComponentFixture<InsertionSortStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertionSortStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertionSortStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
