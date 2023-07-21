import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  fontSize:number = 12;
  currentHero = {
    name:'john Doe'
  };

  constructor() { }

  ngOnInit(): void {
  }

  setUppercase(value: string){
    this.currentHero.name = value.toUpperCase();
  }

  sendTheNewValue(event: any){
    this.currentHero.name = event.target.value;
  }
}
