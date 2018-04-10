import { Injectable } from '@angular/core';
//  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IProduct } from './product';
import {Http, Response } from '@angular/http';
import { AnonymousSubject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
    private  _productUrl = 'app/api/products/products.json';
 
    constructor(private _http : Http) {
       
    };
    getProducts() :Observable<IProduct[]>{
        
        return this._http.get(this._productUrl)
        .map((response : Response) => <IProduct[]> response.json())
        .do(data => console.log('all:' + JSON.stringify(data)))
        .catch(this.handleError)
    }
    private handleError(error : Response){
        console.log(error);
        return Observable.throw(error.json().error || 'server error');
    }
    

    }
