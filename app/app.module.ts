import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

 import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent }   from './app.component';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, WindowModule, DropDownsModule, FormsModule,
   RouterModule.forRoot([
      { path: 'comp2', component: Component2Component },
      { path: 'comp1', component: Component1Component },      
      { path: '**', redirectTo: 'appcomp' }
    ])
    ],
  declarations: [ AppComponent, Component2Component, Component1Component ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
