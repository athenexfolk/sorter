import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/components/nav-bar/nav-bar.component";
import { immutateMergeSort, mergeSort } from './core/algorithms/merge-sort';
import { bubbleSort } from './core/algorithms/bubble-sort';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sorter';
}
