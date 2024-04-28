import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldTodoEditComponent } from './old-todo-edit/old-todo-edit.component';
import { OldTodoListComponent } from './old-todo-list/old-todo-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OldTodoEditComponent,
    OldTodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OldtodoModule { }
