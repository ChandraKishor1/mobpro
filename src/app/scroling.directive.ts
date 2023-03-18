import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroling]'
})
export class ScrolingDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer2) { 
    console.log('I am scrolled');
  }
  @HostListener('window:scroll', [])
  onScroll(event:any): void {
       console.log('I am scrolled');
  }

}
