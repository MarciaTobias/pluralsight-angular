import { Component, OnInit } from '@angular/core';

@Component({
  // no need for select once we won't have a nested comp.
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}
