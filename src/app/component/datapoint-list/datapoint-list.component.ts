import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DatapointService} from '../../services/datapoint.service';
import {Datapoint} from '../../models/datapoint.model';

@Component({
  selector: 'app-datapoint-list',
  templateUrl: './datapoint-list.component.html',
  styleUrls: ['./datapoint-list.component.scss']
})
export class DatapointListComponent implements OnInit {
  datapoints: Observable<string[]>;
  cpuUsage: Observable<Datapoint>;
  usage = 90;
  constructor(private datapointService: DatapointService) { }

  ngOnInit(): void{
    this.datapoints = this.datapointService.datapoints;
    this.cpuUsage = this.datapointService.cpuUsage;
    this.cpuUsage.pipe().subscribe(data => {console.log(data);
                                            this.usage = data.value; });
  }

}
