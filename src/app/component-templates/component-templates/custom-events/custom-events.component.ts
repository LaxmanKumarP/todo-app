import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros=[{"id":1,"name":"Spidy","power":300},
         {"id":2,"name":"Bobby","power":400},
         {"id":3,"name":"Maddy","power":500},
         {"id":4,"name":"Daddy","power":600},
         {"id":5,"name":"Baddy","power":800},]

  constructor() { }

  ngOnInit(): void {
  }

  delete(hero: any){
    console.log(hero);
  }
}
