import {Component, OnInit, OnChanges, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";
import { ChatService } from '../../services/chatService/chat.service';
import {IChatMessage} from "../../interfaces/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{
  @ViewChild('content') contentInput?: ElementRef;
  buttonText: string = 'Send'
  svgPath?: string = `../../../assets/sendArrow.svg`

  messages: IChatMessage[] = [];
  private messagesSubscription?: Subscription;
  constructor(private chatService: ChatService) {
  }
  ngOnInit(){
    this.messagesSubscription = this.chatService.messages$.subscribe(
        messages => this.messages = messages
    )
    this.messages = this.chatService.getMessages()
  }
    ngOnDestroy(){
    this.messagesSubscription?.unsubscribe()
    }

  ngOnChanges(){
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
