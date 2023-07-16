import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  currentHero = {
    name: "Laxman",
    power:300
  };
  heroImageUrl = './assets/hero.jpg';
  formNotChanged = true;
  canSave = true;
  isSpecial = false;
  isUnchanged = false;

  classConditions = {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special': this.isSpecial
  };

  evilTitle = 'Template<script>alert("evil never sleeps")</script> Syntax';
  noOfColoumns = 2;
  actionName = 'save';
  badCurly = 'different bad curly';
  special = true;

  currentStyles = {
    'font-style': this.canSave ? 'italic': 'normal',
    'font-weight': !this.isUnchanged ? 'bold': 'normal',
    'font-size': this.isSpecial ? '24px': '12px'
  };

  nullHero = null;

  constructor() { }

  ngOnInit(): void {
  }

  getVal() {
    return 1;
  }

  getHeroImage() {
    return this.heroImageUrl;
  }

  onSave(event: any) {
    console.log(event);
  }

  onSubmit(heroForm: any){
    console.log(heroForm);
  }

  onSaving(){
    console.log('just checking');
  }
  updateHero(){
    this.currentHero = {
      name:'john',
      power:700
    }
  }
}
