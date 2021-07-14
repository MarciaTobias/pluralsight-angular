import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  // no need for select once we won't have a nested comp.
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Read the route parameter
    // The id now is a number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // See the id
    this.pageTitle += `: ${id}`;
  }

}
