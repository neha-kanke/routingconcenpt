import { Injectable } from "@angular/core";
import { Iuser } from "src/app/models/users";
import { usersArray } from "../consts/users";



@Injectable({
    providedIn:'root'
})

export class userservices{
userarray:Array<Iuser>=usersArray

    constructor(){}
getalluser():Array<Iuser>{
    return this.userarray
}
singleobj(id:string):Iuser{
     return this.userarray.find(user=>user.userId===id)!
}



}