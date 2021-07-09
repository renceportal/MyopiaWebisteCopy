import { Injectable } from "@angular/core";
import { VERSION } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"; //angular 6, before import { Observable } from 'rxjs/Observable'; 
import { Comments } from "../model/comment";
import { catchError, map, tap } from "rxjs/operators"; //angular 6, before import 'rxjs/add/operator/map'; 


@Injectable({ providedIn: "root" }) //angular 6 

export class CommentService {
  API_KEY = "YOUR_API_KEY";
  commentUrl = "https://myopiacomment-e053.restdb.io/rest/myopiatable?apikey=5d9b3d61a8d63a5e8700c0df";
  uploadUrl = "https://myopiacomment-e053.restdb.io/rest/myopiaupload?apikey=5d9b3d61a8d63a5e8700c0df";
  getUploadUrl = "https://myopiacomment-e053.restdb.io/media/myopia_messenger.png";
  getUploadUrlKey = "https://myopiacomment-e053.restdb.io/media/Ebook+Business+Guide+v4.pdf?key=385608050052956931646";
  postUploadUrl = "https://myopiacomment-e053.restdb.io/media?apikey=5d9b3d61a8d63a5e8700c0df";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.commentUrl).pipe(
      //map((response: any) => response.json()), 
      catchError((error: any) =>
        Observable.throw(error.json().error || "Server error")
      )
    );
    //return this.http.get<Comments[]>(this.commentUrl);
  }

  addComments(comment: Comments) {
    const myObj = {
      comment: comment.comment,
      name: comment.name
    };
    return this.http.post(this.commentUrl, myObj, this.httpOptions);
  }

  uploadFiles(objValues) {
    return this.http.post(this.uploadUrl, objValues, this.httpOptions);
  }

  getFiles() {
    return this.http.get(this.getUploadUrlKey);
    //https://myopiacomment-e053.restdb.io/media/5f707c5a73d1b37e00013ae1?download=true
  }

  getPDF() {
    const urlTest = "https://myopiacomment-e053.restdb.io/media/Ebook+Business+Guide+v4.pdf?key=385608050052956931646";
    const urlProd = "https://myopiacomment-e053.restdb.io/media/5f81d89879224600000d9419?key=25865691315171198606";
    return this.http.get(urlProd
      , { responseType: 'blob' });
  }


}

