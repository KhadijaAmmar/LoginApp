import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageManagerService } from './../Services/storage-manager.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public contentEditable = false;

  constructor( public router: Router,private storageManagerService:StorageManagerService) { }

  ngOnInit() {
  }
  
  toggleTerms(event) {
    if ( event.target.checked ) {
      this.contentEditable = true;
    }
  }

  accept(){
    if (this.contentEditable){
      this.router.navigate(['/welcome']);
    }
  }

  back() {
    this.storageManagerService.removeSession();
    this.router.navigate(['/login']);
  }

}
