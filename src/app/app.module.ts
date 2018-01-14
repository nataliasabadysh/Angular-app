import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { EventsComponent } from './component/events/events.component';
import { FormEventsComponent } from './component/form-events/form-events.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventsComponent,
    FormEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
