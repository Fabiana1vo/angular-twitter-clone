import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { PagesComponent } from './components/pages/pages.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessagesService } from './Services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';


 @NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    NewPostComponent,
    TweetComponent,
    PagesComponent,
    HomeComponent,
    FooterComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MessagesService
  ],  //servicos que estao provendo algo, precisam ser importadas
  bootstrap: [AppComponent]
})
export class AppModule { }
