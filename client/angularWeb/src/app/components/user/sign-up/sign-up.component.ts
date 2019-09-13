import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { UserService } from './../../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  showSucessMessage: boolean;
  // serverErrorMessages: string;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      // err => {
      //   if (err.status === 422) {
      //       this.serverErrorMessages = err.error.join('<br/>');
      //   } else {
      //       this.serverErrorMessages = 'something went wrong. Please contact admin';
      //   }
      // }
    );
  }

}
