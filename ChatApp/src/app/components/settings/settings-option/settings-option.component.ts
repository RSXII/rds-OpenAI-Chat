import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-option',
  templateUrl: './settings-option.component.html',
  styleUrls: ['./settings-option.component.scss']
})
export class SettingsOptionComponent {
  @Input() public optionText: string = "DEFAULT_VALUE";

}
