import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSortDetailComponent } from './selection-sort-detail.component';

describe('SelectionSortDetailComponent', () => {
  let component: SelectionSortDetailComponent;
  let fixture: ComponentFixture<SelectionSortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionSortDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionSortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
