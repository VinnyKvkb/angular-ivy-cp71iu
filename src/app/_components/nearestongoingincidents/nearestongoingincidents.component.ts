import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'src/app/_tableconstants/SortEvent';
import { ongoingIncidents } from '../../_models/ongoingIncidents.model'
import { OngoingincidentsService } from '../../_services/ongoingincidents.service';

@Component({
  selector: 'app-nearestongoingincidents',
  templateUrl: './nearestongoingincidents.component.html',
  styleUrls: ['./nearestongoingincidents.component.css']
})
export class NearestongoingincidentsComponent implements OnInit {

  // Table
  ongoingIncidentsData: ongoingIncidents[];
  cols: any[];

  constructor(private ongoingIncidents: OngoingincidentsService) { }

  ngOnInit() {
    this.ongoingIncidents.onGoingIncidents().then(calls => this.ongoingIncidentsData = calls);
    this.cols = [
      { field: 'agentName', header: 'Agent Name' },
      { field: 'extension', header: 'Extension' },
      { field: 'callerName', header: 'Caller Number' },
      { field: 'callType', header: 'Call Type' },
      { field: 'callDuration', header: 'Call Duration' },
      { field: 'city', header: 'City/Village' },
      { field: 'tehsil', header: 'Tehsil' },
      { field: 'district', header: 'District' },
      // { field: 'assignedStatus', header: 'Assigned Status' }
    ];
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

}