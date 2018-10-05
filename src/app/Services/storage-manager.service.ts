
import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

  private tokenKey: string = 'token';
  private emailKey: string = 'first_name';
  private pwdKey: string = 'last_name';

  constructor() { }

  public storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  public retrieveToken() {
    let storedToken: string = localStorage.getItem(this.tokenKey);
    return storedToken;
  }

  public storeEmail(email: string) {
    localStorage.setItem(this.emailKey, email);
  }

  public retrieveEmail() {
    let storedEmail: string = localStorage.getItem(this.emailKey);
    return storedEmail;
  }


  public storePassword(pwd: string) {
    localStorage.setItem(this.pwdKey, pwd);
  }

  public retrievePassword() {
    let pwd: string = localStorage.getItem(this.pwdKey);
    return pwd;
  }
}
