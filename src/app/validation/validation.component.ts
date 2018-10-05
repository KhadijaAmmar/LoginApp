import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    
  }
  
  accept(){
    this.router.navigate(['/welcome']);
  }
}
