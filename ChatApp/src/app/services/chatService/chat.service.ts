import { Injectable } from '@angular/core';
import { IChatMessage, IChatData } from '../../interfaces/chat';
import {HistoryService} from "../historyService/history.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: IChatMessage[] = [];
  isNewChat: boolean = true;
  constructor(private historyService: HistoryService) { }

  getMessages(): IChatMessage[]{
    return this.messages
  }
  addMessage(sender: string, content: string): void {
    const message: IChatMessage = {user: sender, message: [content]}

    if(this.isNewChat){
      this.isNewChat = false;
      const chatData: IChatData = {topic: 'New Chat', body: this.messages};
      this.historyService.addNewChat(chatData)
    }
    this.messages.push(message)
  }
}
