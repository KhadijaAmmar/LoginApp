import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageManagerService } from './../Services/storage-manager.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public contentEditable = false;
  public checkBoxView;
  public isDisabled = true;

  constructor( public router: Router,private storageManagerService:StorageManagerService) { }

  ngOnInit() {
    this.checkBoxView = document.getElementById('agree');
  }
  
  toggleTerms(event) {
    if ( event.target.checked ) {
      this.contentEditable = true;
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    let tracker = event.target;

    let limit = tracker.scrollHeight - tracker.clientHeight;
    console.log(event.target.scrollTop, limit);
    if (event.target.scrollTop === limit) {
      //alert('end reached');
      this.isDisabled= false;
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
