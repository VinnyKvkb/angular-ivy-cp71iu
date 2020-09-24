import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'src/app/_tableconstants/SortEvent';
import { hospitlDetails } from '../../_models/details.model';
import { DetailsInfoService } from '../../_services/details-info.service';
import { MatDialog } from '@angular/material';
import { HospitalspecializationsComponent } from '../hospitalspecializations/hospitalspecializations.component';

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.css']
})
export class HospitaldetailsComponent implements OnInit {

  // Hospital Details
  hospitalDetails: hospitlDetails[];
  cols: any[];

  // Dialog for Hospiatal Specializations
  specialities() {
    this.dialog.open(HospitalspecializationsComponent, {
      width: '50%'
    })
  }

  constructor(private hospitalDetailsService: DetailsInfoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.hospitalDetailsService.getHospitalDetails().then(fdetails => this.hospitalDetails = fdetails);

    this.cols = [
      { field: 'hospitalName', header: 'Hospitl Name' },
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