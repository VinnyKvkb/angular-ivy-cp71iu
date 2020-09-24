import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coremarks',
  templateUrl: './coremarks.component.html',
  styleUrls: ['./coremarks.component.css']
})
export class CoremarksComponent implements OnInit {

  // CO Remarks
  coRemarksOptions: coRemarks[];
  selectedCoRemarks: coRemarks;
  //  Break Type
  breakTypeOptions: breakType[];
  selectedBreakType: breakType;

  constructor() { }

  ngOnInit() {
    this.coRemarksOptions = [
      { coRemarksType: 'Select One', coRemarksId: null },
      { coRemarksType: 'CO Remark-1', coRemarksId: 1 },
      { coRemarksType: 'CO Remarks-2', coRemarksId: 2 },
    ];

    this.breakTypeOptions = [
      { breakTypeType: 'Select One', breakTypeId: null },
      { breakTypeType: 'Break Type-1', breakTypeId: 1 },
      { breakTypeType: 'Break Type-2', breakTypeId: 2 },
    ];
  }

}

// CO Remarks
export interface coRemarks {
  coRemarksType: string;
  coRemarksId: number;

}
// Break Type
export interface breakType {
  breakTypeType: string;
  breakTypeId: number;

}