import { Injectable } from '@angular/core';
import { Users } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = 'apikey=5e918e36111788414066c917';
  userUrl = "https://rencequiz-c032.restdb.io/rest/tbluser";
  constructor(private http: HttpClient) { }

  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' 
    }) 
  }; 

  fetchUsers() : Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl + "?" + this.apiKey);
  }

  fetchUsersById(int: string): Observable<Users> { 
    return this.http.get<Users>(this.userUrl + "?q={\"intUserId\":" + int + "}&" + this.apiKey);
  } 

  deleteUsersById(int: string) { 
    return this.http.delete<Users>(this.userUrl + "/" + int + "?" + this.apiKey);
  } 

  postUsers(usr: Users) { 
    const myObj = { 
      strLocation: usr.strLocation,
      strPassword: usr.strPassword,
      strName: usr.strName, 
    }; 
    return this.http.post(this.userUrl + "?" + this.apiKey, myObj, this.httpOptions); 
  } 

  putUsers(usr: Users) {
    const myObj = { 
      intUserId: usr.intUserId, 
      strName: usr.strName
   }; 
    return this.http.put(this.userUrl + "/" + usr._id + "?" + this.apiKey, myObj, this.httpOptions); 
  } 


}
