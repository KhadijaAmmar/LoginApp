import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//import { StorageManagerService } from './storage-manager.service';
import {User} from './../Model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 
  private URL = "http://localhost:5000/api/login";
  private httpOptions = {
    headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json'
      }
    )
  };
  constructor(private http: HttpClient) { }
/*
 
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }*/

  logIn (user: User): Observable<User> {
    return this.http.post<User>(this.URL, user, this.httpOptions)
    .pipe(
      tap((user: User) => this.log(`added user`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error);
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }
 
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }

}
