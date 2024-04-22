import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TodoListComponent } from './newtodo/todo-list/todo-list.component';
import { AddEditTodoComponent } from './newtodo/add-edit-todo/add-edit-todo.component';
import { IndexComponent } from './index/index.component';
import { DisplayDataInTemplateComponent } from './component-templates/component-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './component-templates/component-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './component-templates/component-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './component-templates/component-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './component-templates/component-templates/two-way-binding/two-way-binding.component';
import { ParentChildComponent } from './component-templates/component-templates/parent-child/parent-child.component';
import { DirectivesComponent } from './component-templates/component-templates/directives/directives.component';
import { InteractionComponent } from './component-templates/component-templates/interaction/interaction.component';
import { CodingChallengesComponent } from './coding-challenges/coding-challenges/coding-challenges.component';
// import { AddEditTodoComponent } from './todo/add-edit-todo/add-edit-todo.component';
// import { TodoListComponent } from './todo/todo-list/todo-list.component';
// import { TodoModule } from './todo/todo.module';

const routes: Routes = [
{path:'todo', component:TodoListComponent},
{path:'todo/:id', component: AddEditTodoComponent},
{path:'',redirectTo:'todo',pathMatch:'full'},
{path:'index', component:IndexComponent},
{path:'coding-challenges', component:CodingChallengesComponent},
{path:'components-templates/display-data-in-template', component:DisplayDataInTemplateComponent},
{path:'components-templates/display-data-in-template-url', component:DisplayDataInTemplateUrlComponent},
{path:'components-templates/template-syntax', component:TemplateSyntaxComponent},
{path:'components-templates/template-syntax/custom-events', component:CustomEventsComponent},
{path:'components-templates/template-syntax/two-way-binding', component:TwoWayBindingComponent},
{path:'components-templates/directives', component:DirectivesComponent},
{path:'components-templates/parent-child', component: ParentChildComponent},
{path:'components-templates/component-interaction', component: InteractionComponent},
{path:'**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
