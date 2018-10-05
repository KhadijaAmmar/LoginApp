
import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

  private emailKey: string = 'mail';
  

  constructor() { }



  public storeEmail(email: string) {
    localStorage.setItem(this.emailKey, email);
  }

  public retrieveEmail() {
    let storedEmail: string = localStorage.getItem(this.emailKey);
    return storedEmail;
  }
  public removeSession() {
    localStorage.setItem(this.emailKey, '');
  }

  public isValidSession() {
    return (this.retrieveEmail() === '');
  }

}
