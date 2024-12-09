import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { Stepper } from '../../../../core/abstracts/stepper';
import {
  BubbleSortService,
  BubbleSortTrack,
} from '../../services/bubble-sort.service';

@Component({
  selector: 'app-bubble-sort-stepper',
  imports: [StepControllerComponent, NgClass],
  templateUrl: './bubble-sort-stepper.component.html',
  styleUrl: './bubble-sort-stepper.component.css',
})
export class BubbleSortStepperComponent extends Stepper<BubbleSortTrack> {
  protected override sorter = inject(BubbleSortService);
  override assignClass(index: number) {
    const { action, highlight } = this.currentStep();

    switch (action) {
      case 'end':
        return 'bg-green-200';
      case 'compare':
        return highlight.includes(index) ? 'bg-yellow-200' : 'bg-zinc-200';
      case 'swap':
        return highlight.includes(index) ? 'bg-blue-200' : 'bg-zinc-200';
      case 'noswap':
        return highlight.includes(index) ? 'bg-red-200' : 'bg-zinc-200';
      default:
        return 'bg-zinc-200';
    }
  }
}
