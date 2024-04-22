import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FontSizerComponent } from './font-sizer/font-sizer.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { HighligtV1Directive } from './attribute-directives/highligt-v1.directive';
import { HighligtV2Directive } from './attribute-directives/highligt-v2.directive';
import { HighligtV3Directive } from './attribute-directives/highligt-v3.directive';
import { ReverseIfDirective } from '../structural-directives/reverse-if.directive';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { InteractionComponent } from './interaction/interaction.component';
import { HeroNameComponent } from './hero-name/hero-name.component';
import { CountdownParentWithTempRefComponent } from './countdown-parent-with-temp-ref/countdown-parent-with-temp-ref.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentWithViewchildComponent } from './countdown-parent-with-viewchild/countdown-parent-with-viewchild.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    DisplayDataInTemplateComponent,
    DisplayDataInTemplateUrlComponent,
    TemplateSyntaxComponent,
    HeroDetailComponent,
    CustomEventsComponent,
    DisplayHeroComponent,
    HeroBioComponent,
    TwoWayBindingComponent,
    FontSizerComponent,
    DirectivesComponent,
    HighlightDirective,
    HighligtV1Directive,
    HighligtV2Directive,
    HighligtV3Directive,
    ReverseIfDirective,
    ParentChildComponent,
    EditUserComponent,
    InteractionComponent,
    HeroNameComponent,
    CountdownParentWithTempRefComponent,
    CountdownTimerComponent,
    CountdownParentWithViewchildComponent,
    UserDetailComponent,
    SimpleTodoComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentTemplatesModule { }
