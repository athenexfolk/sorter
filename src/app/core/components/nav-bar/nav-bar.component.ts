import { Component } from '@angular/core';
import { Switch } from '../../../shared/utils/switch';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { RouterLink } from '@angular/router';
import { sortList } from '../../constants/available-sort';
import { kebabize } from '../../../shared/utils/kebab';

@Component({
  selector: 'app-nav-bar',
  imports: [ClickOutsideDirective, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  algorithms = sortList.map((name) => ({
    name,
    path: kebabize(name),
  }));

  algorithmPanel = new Switch();
}
