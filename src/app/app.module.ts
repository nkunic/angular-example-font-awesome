import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  declarations: [AppComponent, BoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
