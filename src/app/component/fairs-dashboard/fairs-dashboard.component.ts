import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/models/fairs';
import { FairesService } from 'src/app/shared/services/faires.service';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
fairsArr :Array<Ifairs>=[]

  constructor(private _fairservices:FairesService,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.fairsArr=this._fairservices.getalldata()
   
  }

}
