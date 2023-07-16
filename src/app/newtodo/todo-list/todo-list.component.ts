import { Component, OnInit } from '@angular/core';
import { NewtodoService } from '../newtodo.service';
import { Ntodo } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Ntodo[] = [];
  constructor(private todoService:NewtodoService) { }

  ngOnInit(): void {
    this.todoService.gdetTodos().subscribe((data:Ntodo[]) =>{
      this.todos = data;
      console.log(this.todos);
    });
  }

}
