import { IProduct } from "./product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";


@Component({
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    product : IProduct;
    pageTitle :string = 'Product Details';

    constructor(private _route :ActivatedRoute,
                private _router :Router){

    }
    ngOnInit() :void {
        // plus "+" na poczatku konwertuje string na tyb numeryczny ES5
        // pobieramy id i dodajemy do tytulu
        // uzywamy snapshot zamiast observable poniewaz paramatr
        // sie nie mienia
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
}