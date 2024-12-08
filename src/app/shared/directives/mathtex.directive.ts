import { Directive, ElementRef, Input } from '@angular/core';
import katex from 'katex';

@Directive({
  selector: '[mathtex]',
})
export class MathtexDirective {
  @Input('mathtex') expression!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (this.expression) {
      katex.render(this.expression, this.el.nativeElement, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }
}
