import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {RamStat} from '../models/ramstat.model';
import {CpuData} from '../models/cpudata.model';
import {GpuData} from '../models/gpu-data.model';

@Injectable({
  providedIn: 'root'
})
export class DatapointService {
  ramStatistics = this.socket.fromEvent<RamStat>('memory');
  cpuStatistics = this.socket.fromEvent<CpuData>('cpu');
  gpuStatistics = this.socket.fromEvent<GpuData>('gpu');

  constructor(private socket: Socket) {
  }

}
