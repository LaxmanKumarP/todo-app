import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AddEditTodoComponent } from './todo/add-edit-todo/add-edit-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [
 {path:'todos', component:TodoListComponent},
 {path:'todo/:id', component:AddEditTodoComponent},
 {path:'',redirectTo:'todos', pathMatch:'full'},
 {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
