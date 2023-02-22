import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Itodo[] = [];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (data:Itodo[]) => {
        this.todos = data
        console.log('test',this.todos)});
  }

}
