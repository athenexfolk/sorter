import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import katex from 'katex';

@Directive({
  selector: '[mathtex]',
})
export class MathtexDirective {
  @Input('mathtex') expression!: string;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnChanges(): void {
    if (this.expression && isPlatformBrowser(this.platformId)) {
      katex.render(this.expression, this.el.nativeElement, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }
}
