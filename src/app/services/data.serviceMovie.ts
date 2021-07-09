import { Injectable } from '@angular/core';
import { Movies } from '../model/movie';
import { Genres } from '../model/Genre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataServiceWebApi {

  apiKey = 'apikey=5e918e36111788414066c917';
  userUrl = "https://rencequiz-c032.restdb.io/rest/tbluser";
  movieUrl = "https://localhost:44303/api/movies";
  genreUrl = "https://localhost:44303/api/genres";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  fetchMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.movieUrl);
  }
  fetchGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(this.genreUrl);
  }
  fetchoviesById(int: string): Observable<Movies> {
    return this.http.get<Movies>(this.movieUrl + '?id=' + int);
  }
  postMovies(movie: Movies) {
    const myObj = {
      name: movie.name,
      genreId: movie.genreId,
      //releaseDate: Date.now()      
    };
    return this.http.post(this.movieUrl, myObj, this.httpOptions);
  }

  //   fetchUsersById(int: string): Observable<Users> { 
  //     return this.http.get<Users>(this.userUrl + "?q={\"intUserId\":" + int + "}&" + this.apiKey);
  //   } 

  //   deleteUsersById(int: string) { 
  //     return this.http.delete<Users>(this.userUrl + "/" + int + "?" + this.apiKey);
  //   } 

  //   postUsers(usr: Users) { 
  //     const myObj = { 
  //       strLocation: usr.strLocation,
  //       strPassword: usr.strPassword,
  //       strName: usr.strName, 
  //     }; 
  //     return this.http.post(this.userUrl + "?" + this.apiKey, myObj, this.httpOptions); 
  //   } 

  //   putUsers(usr: Users) {
  //     const myObj = { 
  //       intUserId: usr.intUserId, 
  //       strName: usr.strName
  //    }; 
  //     return this.http.put(this.userUrl + "/" + usr._id + "?" + this.apiKey, myObj, this.httpOptions); 
  //   } 


}
