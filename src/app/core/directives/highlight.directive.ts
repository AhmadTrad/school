import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.eleRef.nativeElement.style.background = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => {
      this.eleRef.nativeElement.style.background = 'blue';
    }, 5000);
    
  }




}
