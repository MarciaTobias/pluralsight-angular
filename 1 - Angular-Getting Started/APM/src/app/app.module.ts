import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './products/convert-to-spaces-pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  // Angular can locate its selector
  declarations: [
    // Using a component as a directive
    AppComponent,
    WelcomeComponent,
    ProductListComponent, 
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    // Application runs correctly in the browser
    BrowserModule,
    // Nativily from Angular
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        // Specify which guard we want display when activating the route
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  // Starting components for ou app
  bootstrap: [AppComponent]
})
export class AppModule { }
// Angular Module is like a project file