import { Component, OnInit } from '@angular/core';


import { UserService } from './../../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
