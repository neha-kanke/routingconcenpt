import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/models/fairs';
import { FairesService } from 'src/app/shared/services/faires.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
  fairid !:string;
  faircardobj !:Ifairs
  constructor(private Routes:ActivatedRoute,private _fairservice:FairesService) { }

  ngOnInit(): void {
   this.Routes.params
   .subscribe((params:Params)=>{
    this.fairid=params['fairId']
    console.log(this.fairid);
    this.faircardobj=this._fairservice.getsingcard(this.fairid)
   })

  
  }

}
