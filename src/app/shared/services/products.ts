import { Injectable } from "@angular/core";
import { Iproduct } from "src/app/models/products";
import { productsArray } from "../consts/products";


@Injectable({
    providedIn:'root'
})

export class productsservices{
  productarray:Array<Iproduct>=productsArray

    constructor(){}


getallarray():Array<Iproduct>{
   return this.productarray
}
getsingleobj(id:string):Iproduct{
    return this.productarray.find(pass=> pass.pId===id)!
}
addnewpro(product:Iproduct){
    this.productarray.push(product)
    console.log(this.productarray);
    
    
}

}
