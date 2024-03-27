import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/products';
import { productsservices } from 'src/app/shared/services/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
prodid !:string
prodobj !:Iproduct
  constructor(
    private _prodserv:productsservices, 
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //  let val=this._route.snapshot.params
    this.prodid=this._route.snapshot.params['proid']
    console.log(this.prodid);
    
    if(this.prodid){
      this.prodobj=this._prodserv.getsingleobj(this.prodid)
      console.log(this.prodobj);
      
    }
  }

}
