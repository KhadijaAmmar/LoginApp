import { Component, OnInit, ElementRef } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUser(form:ElementRef){
    console.log(form);
    //console.log(form.value.password);
  }

}
