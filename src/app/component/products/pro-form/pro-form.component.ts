import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productsservices } from 'src/app/shared/services/products';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-pro-form',
  templateUrl: './pro-form.component.html',
  styleUrls: ['./pro-form.component.scss']
})
export class ProFormComponent implements OnInit {
productsform !:FormGroup
  constructor(private _uuidservise:UuidService,
    private _productservises:productsservices) { }

  ngOnInit(): void {
    this.createproductform()
  }


  createproductform(){
    this.productsform=new FormGroup({
      pName:new FormControl(null,[Validators.required]),
      pStatus:new FormControl(null,[Validators.required])
    })
  }

  onaddform(){
  let newproobj={...this.productsform.value,pId:this._uuidservise.generateUUID()} 
  console.log(newproobj);
  this._productservises.addnewpro(newproobj)
  this.productsform.reset()
  }
}
