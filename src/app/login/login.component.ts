import { Component, OnInit, ElementRef } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {AuthService} from './../Services/auth.service';
import {User} from './../Model/user';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { StorageManagerService } from './../Services/storage-manager.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, StorageManagerService]
})
export class LoginComponent implements OnInit {
  user : User;

  constructor(private authenticationService : AuthService, public router: Router, private storageManagerService:StorageManagerService ) { }

  ngOnInit() {
    if (this.storageManagerService.retrieveEmail() !== ''){
      this.router.navigate(['/welcome']);
    }
   }

  loginUser(form:NgForm){
    console.log(form.value.userid);
    console.log(form.value.password);
    let login = form.value.userid;
    let password = form.value.password;
  


    this.authenticationService.logIn(this.user).subscribe(user => {
                
                  this.storageManagerService.storeEmail(login)
                  this.user = new User()
                  this.router.navigate(['/validation']);
                      
    })
  }

}
