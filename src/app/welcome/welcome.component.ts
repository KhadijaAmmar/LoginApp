import { Component, OnInit } from '@angular/core';
import { StorageManagerService } from './../Services/storage-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router,private storageManagerService:StorageManagerService) { }

  ngOnInit() {
    if (this.storageManagerService.isValidSession()){
      this.router.navigate(['/login']);
    }
  }

  logout(){
    this.storageManagerService.removeSession();
    this.router.navigate(['/login']);
  }
}
