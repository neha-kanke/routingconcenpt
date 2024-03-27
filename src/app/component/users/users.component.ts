import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users';
import { userservices } from 'src/app/shared/services/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userarr:Array<Iuser>=[]
  constructor( private _userserv:userservices) { }

  ngOnInit(): void {
    this.userarr=this._userserv.getalluser()
  }

}
