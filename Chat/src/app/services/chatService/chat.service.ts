import { Injectable } from '@angular/core';
import { IChatMessage } from '../../interfaces/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: IChatMessage[] = [];
  constructor() { }

  getMessages(): IChatMessage[]{
    return this.messages
  }
  addMessage(sender: string, content: string): void {
    const message: IChatMessage = {user: sender, message: [content]}
    this.messages.push(message)
  }
}
