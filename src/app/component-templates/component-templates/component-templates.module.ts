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
    HighligtV3Directive
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentTemplatesModule { }
