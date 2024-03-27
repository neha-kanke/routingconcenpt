import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/products';
import { productsservices } from 'src/app/shared/services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
prodarray:Array<Iproduct>=[]
  constructor(
    private _productser:productsservices
  ) { }

  ngOnInit(): void {
    this.prodarray=this._productser.getallarray()
  }

}
