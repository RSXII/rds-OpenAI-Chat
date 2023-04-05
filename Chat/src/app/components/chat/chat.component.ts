import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ChatService } from '../../services/chatService/chat.service';
import {IChatMessage} from "../../interfaces/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  @ViewChild('content') contentInput?: ElementRef;

  messages: IChatMessage[] = [];
  constructor(private chatService: ChatService) {
  }
  ngOnInit(){
    this.messages = this.chatService.getMessages()
  }

  sendMessage(content: string, event: Event): void {
    event.preventDefault()
    this.chatService.addMessage("User", content)
    if(this.contentInput){
      this.contentInput.nativeElement.value = '';
    }
  }

}
