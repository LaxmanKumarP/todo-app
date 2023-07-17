import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css']
})
export class HeroBioComponent implements OnInit {
  @Input('name')hero: any;
  @Output('deleteRequest')deleteHeroEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteHero(hero: any) {
    this.deleteHeroEvent.emit(hero);
  }
}
