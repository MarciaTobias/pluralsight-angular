import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './products/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // Angular can locate its selector
  declarations: [
    // Using a component as a directive
    AppComponent,
    ProductListComponent, 
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    // Application runs correctly in the browser
    BrowserModule,
    // Nativily from Angular
    FormsModule,
    HttpClientModule
  ],
  // Starting components for ou app
  bootstrap: [AppComponent]
})
export class AppModule { }
// Angular Module is like a project file