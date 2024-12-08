import { Routes } from '@angular/router';
import { BubbleSortDetailComponent } from './features/bubble-sort/pages/bubble-sort-detail/bubble-sort-detail.component';
import { SelectionSortDetailComponent } from './features/selection-sort/pages/selection-sort-detail/selection-sort-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: BubbleSortDetailComponent,
  },
  {
    path: 'selection-sort',
    component: SelectionSortDetailComponent
  }
];
