import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
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

    products: any = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          } 
    ];

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

    // Lifecycle Hook
    ngOnInit(): void {
        //console.log('In OnInit');
        this.listFilter = 'cart';
    }   
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
 }