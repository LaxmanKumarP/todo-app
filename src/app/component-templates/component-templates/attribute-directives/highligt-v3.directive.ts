import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligtV3]'
})
export class HighligtV3Directive {

  @Input('appHighligtV3') highlightColor: any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.highlight('');
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
