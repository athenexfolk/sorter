import { Routes } from '@angular/router';
import { BubbleSortDetailComponent } from './features/bubble-sort/pages/bubble-sort-detail/bubble-sort-detail.component';
import { SelectionSortDetailComponent } from './features/selection-sort/pages/selection-sort-detail/selection-sort-detail.component';
import { LandingComponent } from './features/landing/pages/landing/landing.component';
import { InsertionSortDetailComponent } from './features/insertion-sort/pages/insertion-sort-detail/insertion-sort-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'bubble-sort',
    component: BubbleSortDetailComponent,
  },
  {
    path: 'selection-sort',
    component: SelectionSortDetailComponent,
  },
  {
    path: 'insertion-sort',
    component: InsertionSortDetailComponent,
  }
];
