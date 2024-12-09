import { Component, inject } from '@angular/core';
import {
  InsertionSortService,
  InsertionSortTrack,
} from '../../services/insertion-sort.service';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { NgClass } from '@angular/common';
import { Stepper } from '../../../../core/abstracts/stepper';

@Component({
  selector: 'app-insertion-sort-stepper',
  imports: [StepControllerComponent, NgClass],
  templateUrl: './insertion-sort-stepper.component.html',
  styleUrl: './insertion-sort-stepper.component.css',
})
export class InsertionSortStepperComponent extends Stepper<InsertionSortTrack> {
  protected override sorter = inject(InsertionSortService);

  assignClass(index: number) {
    const { action, highlight } = this.currentStep();

    switch (action) {
      case 'end':
        return 'bg-green-200';
      case 'def':
        return highlight.includes(index) ? 'bg-purple-200' : 'bg-zinc-200';
      case 'move':
        return highlight.includes(index) ? 'bg-yellow-200' : 'bg-zinc-200';
      case 'insert':
        return highlight.includes(index) ? 'bg-blue-200' : 'bg-zinc-200';
      default:
        return 'bg-zinc-200';
    }
  }
}
