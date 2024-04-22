import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-challenges',
  templateUrl: './coding-challenges.component.html',
  styleUrls: ['./coding-challenges.component.css']
})
export class CodingChallengesComponent implements OnInit {
  arr = [[1,2],[1,3],[1,2,3,4]];
 
  cellData = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
