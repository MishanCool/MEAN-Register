import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {       // User -> object
    username: '',              // Declair user model object
    email: '',                 //
    password: ''               //
  };

  constructor(
    private http: HttpClient
  ) { }

  postUser(user: User) {
    return this.http.post( environment.apiBaseUrl + '/register', user);
  }

}
