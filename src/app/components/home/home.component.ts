import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tweets: string [ ] = []
  constructor(private service: MessagesService){

  }  
  ngOnInit(): void {
    this.tweets = this.service.getMessages();
  }

  // lifeciclehook
}
