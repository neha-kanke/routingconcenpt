import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss']
})
export class NavberComponent implements OnInit {

  constructor(private authserv:AuthService) { }

  ngOnInit(): void {
  }
  onlogin(){
    this.authserv.login()
  }
  onlogout(){
    this.authserv.logout()
  }
}
