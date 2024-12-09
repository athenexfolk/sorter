import { Component, inject } from '@angular/core';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import {
  SelectionSortService,
  SelectionSortTrack,
} from '../../services/selection-sort.service';
import { NgClass } from '@angular/common';
import { Stepper } from '../../../../core/abstracts/stepper';

@Component({
  selector: 'app-selection-sort-stepper',
  imports: [StepControllerComponent, NgClass],
  templateUrl: './selection-sort-stepper.component.html',
  styleUrl: './selection-sort-stepper.component.css',
})
export class SelectionSortStepperComponent extends Stepper<SelectionSortTrack> {
  protected override sorter = inject(SelectionSortService);
  assignClass(index: number) {
    const { action, highlight, min, oldMin } = this.currentStep();

    switch (action) {
      case 'end':
        return 'bg-green-200';
      case 'def':
        return min === index ? 'bg-purple-200' : 'bg-zinc-200';
      case 'compare':
        return min === index
          ? 'bg-purple-200'
          : oldMin === index
          ? 'bg-purple-100'
          : highlight.includes(index)
          ? 'bg-yellow-200'
          : 'bg-zinc-200';
      case 'min':
        return min === index
          ? 'bg-purple-200'
          : oldMin === index
          ? 'bg-purple-100'
          : 'bg-zinc-200';
      case 'swap':
        return highlight.includes(index) ? 'bg-blue-200' : 'bg-zinc-200';
      default:
        return 'bg-zinc-200';
    }
  }
}
