import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './products/convert-to-spaces-pipe';

@NgModule({
  // Angular can locate its selector
  declarations: [
    AppComponent,
    ProductListComponent, 
    ConvertToSpacesPipe
  ],
  imports: [
    // Application runs correctly in the browser
    BrowserModule,
    // Nativily from Angular
    FormsModule
  ],
  // Starting components for ou app
  bootstrap: [AppComponent]
})
export class AppModule { }
// Angular Module is like a project file