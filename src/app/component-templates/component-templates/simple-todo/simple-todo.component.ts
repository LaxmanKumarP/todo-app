import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css']
})
export class SimpleTodoComponent implements OnInit {

  UserActions = [];

  constructor() { }

  ngOnInit(): void {
  }

  todos= [
    {id:1, title: 'pay power bill', done: false},
    {id:2, title: 'pay phone bill', done: false},
    {id:3, title: 'Talk to call center', done: false},
    {id:4, title: 'Attend Meeting', done: true},
    {id:5, title: 'Deposit Money', done: true}
    
  ]

}
