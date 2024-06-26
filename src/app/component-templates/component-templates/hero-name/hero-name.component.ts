import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-name',
  templateUrl: './hero-name.component.html',
  styleUrls: ['./hero-name.component.css']
})
export class HeroNameComponent implements OnInit {
  private _name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() set name(name: string){
    this._name = name.trim(); 
  }

  get name(){
    return this._name;
  }
}
