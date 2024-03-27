import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/models/users';
import { userservices } from 'src/app/shared/services/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userid !:string;
userobj !:Iuser;
  constructor(private _route:ActivatedRoute,private _userservices:userservices) { }

  ngOnInit(): void {
   this.userid= this._route.snapshot.params['userid'];
   console.log(this.userid);
   this.userobj=this._userservices.singleobj(this.userid)
   console.log(this.userobj);
   
   
  }

}
