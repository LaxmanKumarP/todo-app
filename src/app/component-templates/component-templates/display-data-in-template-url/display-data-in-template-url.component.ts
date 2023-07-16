import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template-url',
  templateUrl: './display-data-in-template-url.component.html',
  styleUrls: ['./display-data-in-template-url.component.css']
})
export class DisplayDataInTemplateUrlComponent implements OnInit {
  title!: string;
  myHeros!: string;
  heros:string[] = ['Spiderman','Superman','Heman','Wonderwomen'];

  constructor() { }

  ngOnInit(): void {
    this.title = 'Tours of Heros';
    this.myHeros = 'Superman'
    let age = 20;
  }

}
