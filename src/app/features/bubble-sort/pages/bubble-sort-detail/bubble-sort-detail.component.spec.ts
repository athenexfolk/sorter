import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortDetailComponent } from './bubble-sort-detail.component';

describe('BubbleSortDetailComponent', () => {
  let component: BubbleSortDetailComponent;
  let fixture: ComponentFixture<BubbleSortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleSortDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleSortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
