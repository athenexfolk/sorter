import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-step-controller',
  imports: [],
  templateUrl: './step-controller.component.html',
  styleUrl: './step-controller.component.css',
})
export class StepControllerComponent {
  first = output();
  prev = output();
  next = output();
  last = output();

  disabledPrev = input(false);
  disabledNext = input(false);
}
