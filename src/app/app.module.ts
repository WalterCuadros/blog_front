import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {APP_BASE_HREF} from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContacComponent } from './pages/contac/contac.component';
import { PostByUserComponent } from './admin/post-by-user/post-by-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    ContacComponent,
    PostByUserComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,routing,RouterModule,FormsModule
  ],
  providers: [
    appRoutingProviders,{provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
