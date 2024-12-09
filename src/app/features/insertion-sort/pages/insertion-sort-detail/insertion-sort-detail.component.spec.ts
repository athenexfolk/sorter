import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSortDetailComponent } from './insertion-sort-detail.component';

describe('InsertionSortDetailComponent', () => {
  let component: InsertionSortDetailComponent;
  let fixture: ComponentFixture<InsertionSortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertionSortDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertionSortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
