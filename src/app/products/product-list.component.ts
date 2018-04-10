import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
     moduleId :module.id,
    // selector : 'pm-products',
    styleUrls: ['product-list.component.css'],
    templateUrl : 'product-list.component.html'
    
})
export class ProductListComponent implements OnInit{
   
    pageTitle :string = 'Product List ';
    name : string = 'Andrzej Bajuk';
    showImage =true ;
    listFilter:string ='';
    products : IProduct[] = [];
    errorMessage: string;
    constructor(private _productService : ProductService){
        
    }
    toggleImage(){
        this.showImage = !this.showImage;
    }
    onRatingClicked(message: string) : void {
        this.pageTitle = "Product List : " +  message;
         
    }
    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => this.products = products,
            error => this.errorMessage =<any>error);
   }

}