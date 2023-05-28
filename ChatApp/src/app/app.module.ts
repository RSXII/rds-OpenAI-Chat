import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainComponent } from './main/main.component';
import { ButtonComponent } from './components/button/button.component';
import {NgOptimizedImage} from "@angular/common";
import { environment } from "../environments/environments";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HistoryComponent,
    SettingsComponent,
    MainComponent,
    ButtonComponent,
    ChatMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage,
    AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule,
    AngularFirestoreModule, AngularFireStorageModule, AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
