import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {}

    // Property default value, does not require data type
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    // List deleted to after creating of getters and setters
    //listFilter: string = 'cart';

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        // If the list filter is empty it will return all products
        return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().includes(filterBy));
    }

    // Void if there is no return type
    toggleImage(): void {
        // it changes the value from true
        this.showImage = !this.showImage;
    }

    // Lifecycle Hook, place to perfom any component initilization
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        //console.log('In OnInit');
        //this.listFilter = 'cart';
    }   
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
 }