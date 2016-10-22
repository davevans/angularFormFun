import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, PortfolioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

