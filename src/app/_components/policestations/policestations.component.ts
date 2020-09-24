import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'src/app/_tableconstants/SortEvent';
import { policeStationDetails } from '../../_models/details.model';
import { DetailsInfoService } from '../../_services/details-info.service';

@Component({
  selector: 'app-policestations',
  templateUrl: './policestations.component.html',
  styleUrls: ['./policestations.component.css']
})
export class PolicestationsComponent implements OnInit {

  policeStationDetails: policeStationDetails[];
  cols: any[];

  constructor(private policeStationService: DetailsInfoService) { }

  ngOnInit() {
    this.policeStationService.getPoliceStationDetails().then(fdetails => this.policeStationDetails = fdetails);

    this.cols = [
      { field: 'policeStation', header: 'Police Statioin' },
      { field: "phone1", header: "Phone #1" },
      { field: "phone2", header: "Caller Name" },
      { field: "address", header: "Address" },
      { field: "village", header: "Village" },
      { field: "mandal", header: "Mandal" },
      { field: "district", header: "District" },
      { field: "state", header: "State" },

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