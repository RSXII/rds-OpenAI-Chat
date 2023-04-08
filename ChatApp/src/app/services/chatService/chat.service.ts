import { Injectable, Input } from '@angular/core';
import { Subject } from "rxjs";
import { IChatMessage, IChatData } from '../../interfaces/chat';
import {HistoryService} from "../historyService/history.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new Subject<IChatMessage[]>();
  messages$ = this.messagesSubject.asObservable();
  private messages: IChatMessage[] = [];
  isNewChat: boolean = true;
  constructor(private historyService: HistoryService) { }

  getMessages(): IChatMessage[]{
    return this.messages
  }
  addMessage(sender: string, content: string): void {
    const message: IChatMessage = {user: sender, message: [content]}

    if(this.isNewChat){
      this.isNewChat = false;
      const chatData: IChatData = {topic: content, body: this.messages};
      this.historyService.addNewChat(chatData)
    }
    this.messages.push(message)
    this.messagesSubject.next(this.messages)
  }
  newMessage(): void {
    this.messages = [];
    this.isNewChat = true;
    this.messagesSubject.next(this.messages);
  }
}
