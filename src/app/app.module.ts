import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'ngx-textmask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
