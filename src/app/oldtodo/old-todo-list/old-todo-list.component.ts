import { Component, OnInit } from '@angular/core';
import { OldTodoService } from '../old-todo.service';
import { Itodo } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'app-old-todo-list',
  templateUrl: './old-todo-list.component.html',
  styleUrls: ['./old-todo-list.component.css']
})
export class OldTodoListComponent implements OnInit {
  todos!: Itodo[];

  constructor(private oldTodo:OldTodoService) { }

  ngOnInit(): void {
    this.oldTodo.getTodos().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }

}
