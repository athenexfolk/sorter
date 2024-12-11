import { Route, Routes } from '@angular/router';
import { LandingComponent } from './features/landing/pages/landing/landing.component';
import { inject } from '@angular/core';
import { MarkedService } from './core/services/marked.service';
import { map } from 'rxjs';
import { SortDetailComponent } from './shared/components/sort-detail/sort-detail.component';
import { sortList } from './core/constants/available-sort';
import { kebabize } from './shared/utils/kebab';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  ...sortList.map<Route>((name) => ({
    path: kebabize(name),
    component: SortDetailComponent,
    title: `${name} - Sorter`,
    resolve: {
      token: () => kebabize(name),
      detail: () => {
        const markedService = inject(MarkedService);
        return markedService
          .getSortDetailByName(kebabize(name))
          .pipe(map((md) => markedService.parse(md)));
      },
    },
  })),
];
