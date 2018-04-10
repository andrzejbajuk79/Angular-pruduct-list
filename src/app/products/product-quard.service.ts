import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import {  Injectable } from "@angular/core";


@Injectable()
 export class ProductDetailGuard implements CanActivate {
     constructor(private _router: Router){};
    canActivate(route: ActivatedRouteSnapshot):boolean{
    // "product/id"   potrzebujemy 'id' zeby sprawdzic czy prawidlowe
    // "+" konwertyje string do number
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('Invalid product Id');


            //start new navigation to redirect to list page
            // zeby uzywac _router dodajemy do konstruktora
            this._router.navigate(['/products'])
            return false;
        }

        return true;
    }
 }