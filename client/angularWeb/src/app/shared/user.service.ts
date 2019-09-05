import { Injectable } from '@angular/core';


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

  constructor() { }
}
