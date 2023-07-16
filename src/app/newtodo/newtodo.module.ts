import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import { NewtodoService } from './newtodo.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodoListComponent,
    AddEditTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[NewtodoService],
  exports: [TodoListComponent, AddEditTodoComponent]
})
export class NewtodoModule { }
