import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public settingsOpen = false;

    constructor() { }

  public toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }

}
