import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // Angular can locate its selector
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    // Application runs correctly in the browser
    BrowserModule
  ],
  // Starting components for ou app
  bootstrap: [AppComponent]
})
export class AppModule { }
// Angular Module is like a project file