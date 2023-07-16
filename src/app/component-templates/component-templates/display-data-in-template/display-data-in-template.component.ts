import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template: `<h1>{{title}}</h1>
  <h2>My Favouriate hero is:<span> {{myHero}}</span></h2>`,
  styleUrls: ['./display-data-in-template.component.css']
})
export class DisplayDataInTemplateComponent implements OnInit {
  title = 'Tour of heros';
  myHero = 'superman'

  constructor() { }

  ngOnInit(): void {
  }

}
