import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DatapointService} from '../../services/datapoint.service';
import {RamStat} from '../../models/ramstat.model';
import {CpuData} from '../../models/cpudata.model';
import {GpuData} from '../../models/gpu-data.model';

@Component({
  selector: 'app-datapoint-list',
  templateUrl: './datapoint-list.component.html',
  styleUrls: ['./datapoint-list.component.scss']
})
export class DatapointListComponent implements OnInit {
  cpuStats: Observable<CpuData>;
  ramStats: Observable<RamStat>;
  gpuStats: Observable<GpuData>;

  displayHeight = 480;
  displayWidth = 800;
  numberOfRows = 2;
  numberOfColumns = 3;

  gaugeSize = this.displayWidth / this.numberOfColumns - 30;

  temperatureThreshold = {
    0: {color: '#009688'},
    80: {color: 'red'}
  };

  constructor(private datapointService: DatapointService) {
  }

  ngOnInit(): void {
    this.cpuStats = this.datapointService.cpuStatistics;
    this.ramStats = this.datapointService.ramStatistics;
    this.gpuStats = this.datapointService.gpuStatistics;
  }

}
