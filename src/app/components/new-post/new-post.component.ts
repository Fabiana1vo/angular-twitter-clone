import { Component } from '@angular/core';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  constructor(private service: MessagesService) {}

  changeTweet() {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }

  sendTweet() {
    this.service.addMessages(this.tweetMessage);
    this.tweetMessage = ''; // zerando o campo de texto
    this.tweetRemain = this.tweetMaxLength; //resetando o contador
  }
}
