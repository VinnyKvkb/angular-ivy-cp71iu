import { Component, OnInit } from '@angular/core';
import { SortEvent } from '../../_tableconstants/SortEvent';
import { followUpData } from '../../_models/followup.model';
import { FollowupService } from '../../_services/followup.service';

@Component({
  selector: 'app-followupinformation',
  templateUrl: './followupinformation.component.html',
  styleUrls: ['./followupinformation.component.css']
})
export class FollowupinformationComponent implements OnInit {

  // Dialof For add feed
  display: boolean = false;
  showDialog() {
    this.display = true;
  }
  closeDialog() {
    this.display = false;
  }

  followUpInformationData: followUpData[];
  cols: any[];

  constructor(private followUpService: FollowupService) { }

  ngOnInit() {
    this.followUpService.getFollowupdetails().then(fdetails => this.followUpInformationData = fdetails);

    this.cols = [
      { field: 'eventId', header: 'Event ID' },
      { field: "callerNumber", header: "Caller Number" },
      { field: "callerName", header: "Caller Name" },
      { field: "callType", header: "Call Type" },
      { field: "callTime", header: "Call Time" },
      { field: "ambulanceNumber", header: "Ambulance #" },
      { field: "hospitalName", header: "Hospital Name" },
    ]
  }

  // Sorting
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

