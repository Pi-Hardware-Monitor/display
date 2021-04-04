import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatapointListComponent } from './component/datapoint-list/datapoint-list.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {GaugeModule} from 'angular-gauge';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    DatapointListComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    GaugeModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
