import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  color:string = 'green';
  currentHero = {
    name: 'john'
  };
  nullHero = null;
  condition = false;
  heroes = [{"id":1,"name":"Lax","power":1234 },
  {"id":2,"name":"Dev","power":7889 },
  {"id":3,"name":"Ram","power":5742 },
  {"id":4,"name":"Pan","power":5678 },
  {"id":5,"name":"Tan","power":2347 }];

  differentHeroNames = [{"id":1,"name":"hat","power":1234 },
  {"id":2,"name":"cat","power":7889 },
  {"id":3,"name":"jot","power":5742 },
  {"id":4,"name":"mat","power":5678 },
  {"id":5,"name":"bat","power":2347 }];

  differentHeroIds = [{"id":11,"name":"hat","power":1234 },
  {"id":12,"name":"cat","power":7889 },
  {"id":13,"name":"jot","power":5742 },
  {"id":14,"name":"mat","power":5678 },
  {"id":15,"name":"bat","power":2347 }];

  trackByHeroes(index:number,hero:any):number{
    return hero.id;
  }

  updateWithDifferentNames(){
    this.heroes = this.differentHeroNames;
  }

  updateWithDifferentIds(){
    this.heroes = this.differentHeroIds;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
