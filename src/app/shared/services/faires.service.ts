import { Injectable } from '@angular/core';
import { Ifairs } from 'src/app/models/fairs';
import { fairsArr } from '../consts/fairsdata';

@Injectable({
  providedIn: 'root'
})
export class FairesService {
fairsarr:Array<Ifairs>=fairsArr
  constructor() { }

  getalldata(){
    return this.fairsarr
  }
  getsingcard(id:string){
    return this.fairsarr.find(card=>card.fairId===id) as Ifairs
  }
}
