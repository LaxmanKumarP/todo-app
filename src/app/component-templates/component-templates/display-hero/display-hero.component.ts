import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnInit {

  @Input() hero: any;
  @Output() deleteHeroEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteHero(hero: any) {
    this.deleteHeroEvent.emit(hero);
  }

}
