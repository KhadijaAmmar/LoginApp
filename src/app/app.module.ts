import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import {HttpClientModule} from '@angular/common/http';

import {AuthService} from './Services/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ValidationComponent } from './validation/validation.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { StorageManagerService } from './Services/storage-manager.service';


const appRoutes : Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'validation', component: ValidationComponent},
  { path: 'welcome', component: WelcomeComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,
    StorageManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
