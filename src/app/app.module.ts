import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ServicesComponent } from './services/services.component';
import { ServicesservicesComponent } from './servicesservices/servicesservices.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateContentComponent,
    AppMessagesComponent,
    ServicesComponent,
    ServicesservicesComponent,
    ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
