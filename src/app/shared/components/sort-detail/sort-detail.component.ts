import { Component, input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SortVisualizerComponent } from '../sort-visualizer/sort-visualizer.component';
import { SortType } from '../../../core/types/sort-type';
import { reverse } from 'dns';

@Component({
  selector: 'app-sort-detail',
  imports: [SortVisualizerComponent],
  templateUrl: './sort-detail.component.html',
  styleUrl: './sort-detail.component.css',
})
export class SortDetailComponent {
  token = input.required<SortType>();
  detail = input<SafeHtml>('');

  config = {
    delay: 50,
    reverse: false
  }
}
