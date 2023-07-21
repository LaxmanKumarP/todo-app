import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent implements OnInit {

  @Input() size: any;
  @Output() sizeChange = new EventEmitter();
  dec(){this.reSize(-1)};
  inc(){this.reSize(1)};

  constructor() { }

  ngOnInit(): void {
  }

  reSize(d: any){
    this.size = Math.min(40, Math.max(8,this.size+d));
    this.sizeChange.emit(this.size)
  }

}
