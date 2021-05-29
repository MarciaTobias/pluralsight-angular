import { Component } from "@angular/core";

// The component decorator is a function (), so we pass an object {}
@Component({
  // itens inside are properties
  selector: 'pm-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
  </div>`

})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}