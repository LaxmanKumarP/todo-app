import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { TodoModule } from './todo/todo.module';
import { FreshappComponent } from './freshapp/freshapp.component';
import { NewtodoModule } from './newtodo/newtodo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './index/index.component';
import { ComponentTemplatesModule } from './component-templates/component-templates/component-templates.module';

@NgModule({
  declarations: [
    AppComponent,
    FreshappComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TodoModule,
    SharedModule,
    HttpClientModule,
    NewtodoModule,
    NgbModule,
    ComponentTemplatesModule,
  ],
  // exports:[ComponentTemplatesModule],
  providers: [],
  // bootstrap: [FreshappComponent]
  bootstrap: [AppComponent]

})
export class AppModule { }
