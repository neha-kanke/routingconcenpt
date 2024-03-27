import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginstatus: boolean = false
  constructor() { localStorage.setItem("token", "Awt token") }
  isuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem("token")) {
          this.loginstatus = true
        } else {
          this.loginstatus = false
        }
        resolve(this.loginstatus)
      }, 100);

    })
  }
  login() {
    /// email forme
    this.loginstatus = true
    localStorage.setItem("token", "Awt token")
  }
  logout() {
    this.loginstatus = false
    localStorage.removeItem("token")
  }

}
