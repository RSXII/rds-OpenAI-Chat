import { Injectable } from '@angular/core';
import {IChatData, IChatMessage} from "../../interfaces/chat";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  messageHistory: IChatData[] = [];

  constructor() { }

  addNewChat(chatData: IChatData): void {
    this.messageHistory.push(chatData)
  }

  addMessageToChat(topic: string, message: IChatMessage): void {
    const chatData = this.messageHistory.find(chat => chat.topic === topic);
    if(chatData){
      chatData.body.push(message)
    }
  }
}
