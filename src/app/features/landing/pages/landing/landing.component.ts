import { Component, QueryList, ViewChildren } from '@angular/core';
import { Visualizer } from '../../../../core/abstracts/visualization';

@Component({
  selector: 'app-landing',
  imports: [
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  @ViewChildren(Visualizer) children!: QueryList<Visualizer>;

  config = {
    reverse: false,
    delay: 10,
  };

  run() {
    this.children.forEach((child) => child.run());
  }
}
