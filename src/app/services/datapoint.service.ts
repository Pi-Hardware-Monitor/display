import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Datapoint} from '../models/datapoint.model';

@Injectable({
  providedIn: 'root'
})
export class DatapointService {

  datapoints = this.socket.fromEvent<string[]>('datapoints');
  cpuUsage = this.socket.fromEvent<Datapoint>('cpuUsage');

  constructor(private socket: Socket) { }

  getDatapoint(id: string) {
    this.socket.emit('getDatapoint', id);
  }
}
