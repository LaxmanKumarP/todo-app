import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TodoListComponent } from './newtodo/todo-list/todo-list.component';
import { AddEditTodoComponent } from './newtodo/add-edit-todo/add-edit-todo.component';
import { IndexComponent } from './index/index.component';
import { DisplayDataInTemplateComponent } from './component-templates/component-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './component-templates/component-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './component-templates/component-templates/template-syntax/template-syntax.component';
// import { AddEditTodoComponent } from './todo/add-edit-todo/add-edit-todo.component';
// import { TodoListComponent } from './todo/todo-list/todo-list.component';
// import { TodoModule } from './todo/todo.module';

const routes: Routes = [
{path:'todo', component:TodoListComponent},
{path:'todo/:id', component: AddEditTodoComponent},
{path:'',redirectTo:'todo',pathMatch:'full'},
{path:'index', component:IndexComponent},
{path:'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent},
{path:'components-templates/display-data-in-template-url', component:DisplayDataInTemplateUrlComponent},
{path:'components-templates/template-syntax', component:TemplateSyntaxComponent},
{path:'**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
