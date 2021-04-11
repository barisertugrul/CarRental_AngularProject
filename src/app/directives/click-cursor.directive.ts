import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[click]'
})
export class ClickCursorDirective {

  @HostBinding('style.cursor') cursor: string = 'pointer';
  constructor() { }

}
