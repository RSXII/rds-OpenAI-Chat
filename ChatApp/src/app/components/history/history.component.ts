import { Component } from '@angular/core';
import { HistoryService } from "../../services/historyService/history.service";
import { ChatService} from "../../services/chatService/chat.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  buttonText = 'New Conversation';
  svgPath?: string = '../../../assets/plusButton.svg';
  historyItems = this.historyService.messageHistory
    constructor(private historyService: HistoryService, public chatService: ChatService) { }

  protected readonly history = history;
}
