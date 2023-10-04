import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligtV1]'
})
export class HighligtV1Directive {

  constructor(public el:ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight('');
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
