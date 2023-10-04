import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligtV2]'
})
export class HighligtV2Directive {
  @Input() highlightColor!: string;

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
